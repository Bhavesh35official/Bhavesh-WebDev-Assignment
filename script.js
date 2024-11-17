document.getElementById("pollForm").addEventListener("submit", function(x) {
    x.preventDefault();  

    
    document.getElementById("pollMessage").textContent = "Thank you for voting!";
});
