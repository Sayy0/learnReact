let root = document.getElementById("root");

function Page(){
    return(
        <div>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

ReactDOM.render(<Page />, root);