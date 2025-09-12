export function addTransaction() {
    return(
        <>
            <div class="container">

                <div class="header">
                <span class="cancel">Cancel</span>
                <span class="save">Save</span>
                </div>

                <h2 class="title">Add Transaction</h2>

                <div class="toggle">
                <button class="active">Expense</button>
                <button>Income</button>
                </div>

                <div class="section">
                <p class="label">Title</p>
                <input type="text" placeholder=""/>
                
                <p class="label">Amount</p>
                <input type="text" placeholder="$"/>
                
                <p class="label">Date</p>
                <div class="row">
                    <input type="text" value="7 May 2025"/>
                    <input type="text" value="15:46"/>
                </div>
                </div>

                <div class="section">
                    <p class="label">Category</p>
                    <select>
                        <option>Food</option>
                        <option>Transportation</option>
                        <option>Housing</option>
                        <option>Entertainment</option>
                        <option>Utilities</option>
                        <option>Healthcare</option>
                        <option>Shopping</option>
                        <option>Other</option>
                    </select>
                    </div>


                <div class="section">
                <p class="label">Notes</p>
                <textarea></textarea>
                </div>
            </div>
        </>
    ) 
}