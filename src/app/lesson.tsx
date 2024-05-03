'use client';

import { useState } from 'react';
import styles from './lesson.module.css';

type LessonProps = {
    title: string;
    shortSummary?: string;
};

type LikeState = 'unset' | 'Liked' | 'dislike';

export default function Lesson({ title, shortSummary }: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>('unset');
    const setLike = () => (likeState === 'unset' ? setLikeState('Liked') : setLikeState('unset'));
    return (
        <>
            <h2 className={styles.text}>text</h2>
            <div>
                <h2>
                    {title}{' '}
                    <button type="button" onClick={setLike}>
                        {likeState === 'unset'
                            ? 'Like'
                            : likeState === 'Liked'
                            ? 'dislike'
                            : likeState}
                    </button>{' '}
                </h2>
                <p>{shortSummary}</p>
            </div>
        </>
    );
}
