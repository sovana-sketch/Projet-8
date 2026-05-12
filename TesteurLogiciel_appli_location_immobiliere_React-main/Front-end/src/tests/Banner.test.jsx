import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Banner from '../components/banner/Banner'

describe('Banner', () => {
  it('affiche l\'image avec le bon alt', () => {
    render(<Banner image="test.jpg" />)
    expect(screen.getByAltText('Banner')).toBeInTheDocument()
  })

  it('affiche le label quand il est fourni', () => {
    render(<Banner image="test.jpg" label="Chez vous, partout et ailleurs" />)
    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
  })

  it('n\'affiche pas de label quand il est absent', () => {
    render(<Banner image="test.jpg" />)
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
  })

  it('ajoute la classe Banner--dark quand un label est fourni', () => {
    const { container } = render(<Banner image="test.jpg" label="Test" />)
    expect(container.firstChild).toHaveClass('Banner--dark')
  })

  it('n\'a pas la classe Banner--dark sans label', () => {
    const { container } = render(<Banner image="test.jpg" />)
    expect(container.firstChild).not.toHaveClass('Banner--dark')
  })
})
