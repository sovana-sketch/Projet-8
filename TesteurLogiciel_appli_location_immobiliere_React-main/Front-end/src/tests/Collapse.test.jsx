import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Collapse from '../components/top-bars/Collapse'

describe('Collapse', () => {
  it('affiche le titre', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('est fermé par défaut', () => {
    const { container } = render(<Collapse title="Description" content="Contenu test" />)
    const content = container.querySelector('.collapse-content')
    expect(content).not.toHaveClass('open')
  })

  it('s\'ouvre au clic sur le header', async () => {
    const { container } = render(<Collapse title="Description" content="Contenu test" />)
    await userEvent.click(screen.getByRole('button'))
    const content = container.querySelector('.collapse-content')
    expect(content).toHaveClass('open')
  })

  it('se referme au deuxième clic', async () => {
    const { container } = render(<Collapse title="Description" content="Contenu test" />)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    await userEvent.click(button)
    const content = container.querySelector('.collapse-content')
    expect(content).not.toHaveClass('open')
  })

  it('affiche le contenu dans le DOM même fermé', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    expect(screen.getByText('Contenu test')).toBeInTheDocument()
  })

  it('s\'ouvre directement si isOpen=true', () => {
    const { container } = render(<Collapse title="Description" content="Contenu test" isOpen={true} />)
    const content = container.querySelector('.collapse-content')
    expect(content).toHaveClass('open')
  })

  it('l\'icône pivote quand ouvert', async () => {
    const { container } = render(<Collapse title="Description" content="Contenu test" />)
    await userEvent.click(screen.getByRole('button'))
    const icon = container.querySelector('.collapse-icon')
    expect(icon).toHaveClass('open')
  })
})
