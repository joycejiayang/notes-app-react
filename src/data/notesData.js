import candyArt from './candy-art.png';

const notesData = [
    {
        id: 1,
        title: "Random thoughts that keep me up at night when I have an epiphany of comedic genius",
        content: `<ul>
                    <li>Why does "phonetically" not sound how it's spelled?</li>
                    <li>What if socks with sandals are just ahead...</li>
                </ul>`,
        date: "Oct 10, 2024",
        numStars: 0,
        order: 3
    },
    {
        id: 2,
        title: "Positive Affirmations",
        content: `<ol>
                    <li>Progress, not perfection, is still a win. Baby steps WILL get me there.</li>
                    <li>I am resilient and capable of handling...</li>
                </ol>`,
        date: "Sep 15, 2024",
        numStars: 2,
        order: 4
    },
    {
        id: 3,
        title: "Quick Meal Ideas",
        content: `<ul>
                    <li>Veggie hummus wraps</li>
                    <li>Peanut butter banana sandwich</li>
                    <li>Ham and cheese sandwich</li>
                </ul>`,
        date: "Sep 1, 2024",
        numStars: 1,
        order: 5
    },
    {
        id: 4,
        title: "Grocery List",
        content: `<label for="checkboxItem1">
                    <input type="checkbox" id="checkboxItem1" name="checkbox1" value="checkboxItem1" />Bread
                </label><br>
                
                <label for="checkboxItem2">
                    <input type="checkbox" id="checkboxItem2" name="checkbox1" value="checkboxItem2" checked />Peanut butter
                </label><br>
                
                <label for="checkboxItem3">
                    <input type="checkbox" id="checkboxItem3" name="checkbox1" value="checkboxItem3" />Yogurt cups
                </label><br>`,
        date: "2:34 PM",
        numStars: 3,
        order: 1
    },
    {
        id: 5,
        title: "Halloween Prep",
        content: `<img src="${candyArt}" alt="Candy Art" />`,
        date: "Oct 24, 2024",
        numStars: 1,
        order: 2
    }
]

export default notesData