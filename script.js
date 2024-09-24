//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
        const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('reset_button');
        const blockIdInput = document.getElementById('block_id');
        const colorInput = document.getElementById('colour_id');
   function resetGrid() {
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        }

        // Event listener for the Change Color button
        changeButton.addEventListener('click', () => {
            const blockId = blockIdInput.value;
            const color = colorInput.value;
            const gridItem = document.getElementById(blockId);

            // Reset all grid colors before applying the new color
            resetGrid();

            // Change background color of the selected grid item
            if (gridItem) {
                gridItem.style.backgroundColor = color;
            } else {
                alert('Invalid Block ID. Please enter a number between 1 and 9.');
            }
        });

        // Event listener for the Reset button
        resetButton.addEventListener('click', () => {
            resetGrid();  // Set all grid items back to transparent
        });
