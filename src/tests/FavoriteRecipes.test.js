import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

describe('Testando se a página de Meals', () => {
  it('Tem o título correto', () => {
    renderWithRouter(<FavoriteRecipes />);

    const title = screen.getByRole('heading', { name: /favorite recipes/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem um botão', () => {
    renderWithRouter(<FavoriteRecipes />);

    const btnTopProfile = screen.getByTestId('profile-top-btn');
    expect(btnTopProfile).toBeInTheDocument();
  });
});
