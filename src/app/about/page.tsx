import Image from 'next/image';
import React from 'react';
import spongeBob from './../../../public/SpongeBob_SquarePants_character.svg'
import styles from './about.module.css'

export default function About() {
    return (
        <article className={styles.root}>
            <Image alt='sponge bob' src={spongeBob} loading='eager' />
            <div className={''}>Hello world</div>
        </article>
    );
}
