import { useState } from 'react'
import './StarRating.css'
import hollowStar from '../assets/hollow-star.svg'
import filledStar from '../assets/filled-star.svg'

function StarRating({numStars, onNumStarChange, parentContainer}) {
    const [currStarCount, setStarCount] = useState(numStars || 0);

    /* Implements star toggling/switching logic */
    function handleStarClick(index) {
        console.log('index:', index, 'currStarCount:', currStarCount)
        let newStarCount = currStarCount;

        if (currStarCount === 0) {
            newStarCount = 1;
        } else if (currStarCount === 1) {
            if (index === 0) {
                newStarCount = 0;
            } else if (index === 1) {
                newStarCount = 2;
            }
        } else if (currStarCount === 2) {
            if (index === 0 || index === 1) {
                newStarCount = 1;
            } else if (index === 2) {
                newStarCount = 3;
            }
        } else if (currStarCount === 3) {
            if (index === 0) {
                newStarCount = 1;
            } else if (index === 2 || index === 1) {
                newStarCount = 2;
            }
        }

        console.log('newStarCount:', newStarCount);
        setStarCount(newStarCount);
        onNumStarChange?.(newStarCount);
    }

    /* Render the stars based on the star toggling/switching logic */
    const starsArray = [];
    let starsClasses = "stars"
    if (parentContainer === "noteEditor") {
        if (currStarCount < 3) {
            starsArray.push(
            <img
                key="empty"
                src={hollowStar}
                onClick={() => handleStarClick(currStarCount)}
                alt="empty star"
            />
            );
        }

        starsClasses += " noteEditor";
    }

    for (let i = 0; i < currStarCount; i++) {
        starsArray.push(
        <img
            key={i}
            src={filledStar}
            onClick={parentContainer === "noteEditor" ? () => handleStarClick(currStarCount - 1 - i) : undefined}
            alt="filled star"
        />
        );
    }

    return (
        <div className={starsClasses}>
            { starsArray }
        </div>
    )
}

export default StarRating