class RecipeApp {
    constructor() {
        this.recipes = window.recipes || [];
        this.filteredRecipes = this.recipes;
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentLanguage = 'ja';
        this.sortByFavorites = false;
        
        this.init();
    }

    init() {
        // Initialize translation manager
        if (typeof translationManager !== 'undefined') {
            translationManager.init();
            this.currentLanguage = translationManager.currentLanguage;
        }
        
        // Bind event listeners
        this.bindEvents();
        
        // Initial render
        this.renderRecipes();
        this.updateFavoritesCount();
        this.renderTotalCount();
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('ingredient-search');
        const searchBtn = document.getElementById('search-btn');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.filterRecipes();
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.filterRecipes();
            });
        }

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                this.currentFilter = e.target.dataset.filter;
                this.filterRecipes();
            });
        });

        // Language selector
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.addEventListener('change', (e) => {
                if (typeof translationManager !== 'undefined') {
                    translationManager.setLanguage(e.target.value);
                    this.currentLanguage = e.target.value;
                    this.renderRecipes(); // Re-render with new language
                    this.renderTotalCount();
                }
            });
        }

        // Favorites toggle
        const favoritesToggle = document.getElementById('favorites-toggle');
        if (favoritesToggle) {
            favoritesToggle.addEventListener('click', () => {
                this.toggleFavoriteSort(favoritesToggle);
            });
        }

        // Close favorites panel
        const closeFavorites = document.getElementById('close-favorites');
        if (closeFavorites) {
            closeFavorites.addEventListener('click', () => {
                this.closeFavoritesPanel();
            });
        }

        // Modal close
        const modalClose = document.querySelector('.modal-close');
        const modal = document.getElementById('recipe-modal');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    toggleFavoriteSort(button) {
        this.sortByFavorites = !this.sortByFavorites;
        button.classList.toggle('active', this.sortByFavorites);
        this.filterRecipes();
    }

    filterRecipes() {
        this.filteredRecipes = this.recipes.filter(recipe => {
            // Filter by meal type
            const typeMatch = this.currentFilter === 'all' || recipe.type === this.currentFilter;
            
            // Filter by search term (search in ingredients and name)
            const searchMatch = !this.searchTerm || 
                recipe.name[this.currentLanguage].toLowerCase().includes(this.searchTerm) ||
                recipe.ingredients[this.currentLanguage].some(ingredient => 
                    ingredient.toLowerCase().includes(this.searchTerm)
                ) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));
            
            return typeMatch && searchMatch;
        });

        if (this.sortByFavorites) {
            this.filteredRecipes.sort((a, b) => {
                const aIsFavorite = this.favorites.includes(a.id);
                const bIsFavorite = this.favorites.includes(b.id);
                if (aIsFavorite && !bIsFavorite) return -1;
                if (!aIsFavorite && bIsFavorite) return 1;
                return 0;
            });
        }

        this.renderRecipes();
    }

    renderRecipes() {
        const recipeGrid = document.getElementById('recipe-grid');
        const loading = document.getElementById('loading');
        const noResults = document.getElementById('no-results');

        if (!recipeGrid) return;

        // Show loading
        if (loading) loading.classList.remove('hidden');
        
        // Clear grid
        recipeGrid.innerHTML = '';

        // Hide no results initially
        if (noResults) noResults.classList.add('hidden');

        // Simulate loading delay for better UX
        setTimeout(() => {
            if (loading) loading.classList.add('hidden');

            if (this.filteredRecipes.length === 0) {
                if (noResults) noResults.classList.remove('hidden');
                return;
            }

            this.filteredRecipes.forEach(recipe => {
                const recipeCard = this.createRecipeCard(recipe);
                recipeGrid.appendChild(recipeCard);
            });
        }, 300);
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.recipeId = recipe.id;

        const isFavorite = this.favorites.includes(recipe.id);
        
        card.innerHTML = `
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name[this.currentLanguage]}</h3>
                <p class="recipe-description">${recipe.description[this.currentLanguage]}</p>
                <div class="recipe-meta">
                    <span>${recipe.prepTime + recipe.cookTime}${this.translate('minutes')}</span>
                    <span>${recipe.calories}${this.translate('kcal')}</span>
                    <span>${recipe.servings}${this.translate('servings')}</span>
                </div>
                <div class="recipe-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-recipe-id="${recipe.id}">
                        ♥
                    </button>
                    <button class="btn btn-primary view-recipe-btn" data-recipe-id="${recipe.id}">
                        ${this.translate('view-recipe')}
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        const favoriteBtn = card.querySelector('.favorite-btn');
        const viewBtn = card.querySelector('.view-recipe-btn');

        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(recipe.id);
        });

        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showRecipeModal(recipe);
        });

        card.addEventListener('click', () => {
            this.showRecipeModal(recipe);
        });

        return card;
    }

    showRecipeModal(recipe) {
        const modal = document.getElementById('recipe-modal');
        const recipeDetail = document.getElementById('recipe-detail');

        if (!modal || !recipeDetail) return;

        const isFavorite = this.favorites.includes(recipe.id);

        recipeDetail.innerHTML = `
            <div class="recipe-detail">
                <div class="recipe-detail-icon-container">
                    <span class="recipe-detail-icon">${recipe.icon || '🍽️'}</span>
                </div>
                <h2 class="recipe-detail-title">${recipe.name[this.currentLanguage]}</h2>
                
                <div class="recipe-detail-meta">
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('prep-time')}</div>
                        <div class="meta-value">${recipe.prepTime}${this.translate('minutes')}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('cook-time')}</div>
                        <div class="meta-value">${recipe.cookTime}${this.translate('minutes')}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('servings')}</div>
                        <div class="meta-value">${recipe.servings}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('difficulty')}</div>
                        <div class="meta-value">${this.translate(recipe.difficulty)}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('calories')}</div>
                        <div class="meta-value">${recipe.calories}${this.translate('kcal')}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('carbs')}</div>
                        <div class="meta-value">${recipe.carbs}${this.translate('grams')}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('protein')}</div>
                        <div class="meta-value">${recipe.protein}${this.translate('grams')}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.translate('fiber')}</div>
                        <div class="meta-value">${recipe.fiber}${this.translate('grams')}</div>
                    </div>
                </div>

                <div class="recipe-actions" style="margin-bottom: 2rem;">
                    <button class="btn ${isFavorite ? 'btn-secondary' : 'btn-primary'} favorite-btn-modal" data-recipe-id="${recipe.id}">
                        ${isFavorite ? this.translate('remove-from-favorites') : this.translate('add-to-favorites')}
                    </button>
                </div>

                <div class="recipe-section">
                    <h3>${this.translate('ingredients')}</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients[this.currentLanguage].map(ingredient => 
                            `<li>${ingredient}</li>`
                        ).join('')}
                    </ul>
                </div>

                <div class="recipe-section">
                    <h3>${this.translate('instructions')}</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions[this.currentLanguage].map(instruction => 
                            `<li>${instruction}</li>`
                        ).join('')}
                    </ol>
                </div>
            </div>
        `;

        // Add favorite button event listener
        const favoriteBtn = recipeDetail.querySelector('.favorite-btn-modal');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => {
                this.toggleFavorite(recipe.id);
                // Update the modal content
                this.showRecipeModal(recipe);
            });
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    toggleFavorite(recipeId) {
        const index = this.favorites.indexOf(recipeId);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(recipeId);
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        
        this.updateFavoriteButtons(recipeId);
        this.updateFavoritesCount();

        // If sorting by favorites, re-render to reflect changes immediately
        if (this.sortByFavorites) {
            this.filterRecipes();
        }
    }

    updateFavoriteButtons(recipeId) {
        const isFavorite = this.favorites.includes(recipeId);
        const favoriteButtons = document.querySelectorAll(`[data-recipe-id="${recipeId}"]`);
        
        favoriteButtons.forEach(btn => {
            if (btn.classList.contains('favorite-btn')) {
                btn.classList.toggle('active', isFavorite);
            }
        });
    }

    updateFavoritesCount() {
        const countEl = document.getElementById('favorites-count');
        if (countEl) {
            countEl.textContent = this.favorites.length;
        }
    }

    closeFavoritesPanel() {
        const panel = document.getElementById('favorites-panel');
        if (panel) {
            panel.classList.remove('active');
        }
    }

    translate(key) {
        if (typeof translationManager !== 'undefined') {
            return translationManager.translate(key);
        }
        return key;
    }

    // Search suggestions
    getSearchSuggestions(term) {
        const suggestions = new Set();
        
        this.recipes.forEach(recipe => {
            // Add ingredient suggestions
            recipe.ingredients[this.currentLanguage].forEach(ingredient => {
                const lowerIngredient = ingredient.toLowerCase();
                if (lowerIngredient.includes(term.toLowerCase())) {
                    suggestions.add(ingredient);
                }
            });
            
            // Add recipe name suggestions
            if (recipe.name[this.currentLanguage].toLowerCase().includes(term.toLowerCase())) {
                suggestions.add(recipe.name[this.currentLanguage]);
            }
        });

        return Array.from(suggestions).slice(0, 5);
    }

    // Statistics
    getStatistics() {
        return {
            totalRecipes: this.recipes.length,
            favoriteRecipes: this.favorites.length,
            recipeTypes: {
                breakfast: this.recipes.filter(r => r.type === 'breakfast').length,
                lunch: this.recipes.filter(r => r.type === 'lunch').length,
                dinner: this.recipes.filter(r => r.type === 'dinner').length,
                snack: this.recipes.filter(r => r.type === 'snack').length
            },
            averageCalories: Math.round(
                this.recipes.reduce((sum, r) => sum + r.calories, 0) / this.recipes.length
            ),
            averagePrepTime: Math.round(
                this.recipes.reduce((sum, r) => sum + r.prepTime + r.cookTime, 0) / this.recipes.length
            )
        };
    }

    renderTotalCount() {
        const totalRecipesText = document.getElementById('total-recipes-text');
        if (!totalRecipesText) return;

        const count = this.recipes.length;
        let text = this.translate('total-recipes');
        text = text.replace('{count}', count);

        totalRecipesText.textContent = text;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.recipeApp = new RecipeApp();
    
    // Add some console information for debugging
    console.log('Recipe App initialized with', window.recipeApp.recipes.length, 'recipes');
    console.log('App statistics:', window.recipeApp.getStatistics());
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 