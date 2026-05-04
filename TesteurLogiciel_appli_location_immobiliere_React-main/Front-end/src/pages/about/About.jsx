import React from 'react'
import './About.css'
import Banner_2 from '../../components/banner/Banner_2'
import Collapse from '../../components/top-bars/Collapse'

export default function About() {
    return (
        <div>
            <Banner_2 />
            <div className="about-content">
                <Collapse title="Section 1" isOpen={true} content="Contenu ouvert 1" />
                <Collapse title="Section 2" isOpen={true} content="Contenu ouvert 2" />
                <Collapse title="Section 3" isOpen={false} content="Contenu fermé 1" />
                <Collapse title="Section 4" isOpen={false} content="Contenu fermé 2" />
            </div>
        </div>
    )
}
