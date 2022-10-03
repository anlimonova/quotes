class quoteGenerator {
  constructor() {
    this.quoteContainer = document.querySelector("[data-quote-container]");
    this.quoteText = this.quoteContainer.querySelector("[data-quote-text]");
    this.quoteAuthor = this.quoteContainer.querySelector("[data-quote-author]");
    this.newQuoteBtn = this.quoteContainer.querySelector(
      "[data-new-quote-btn]"
    );
    this.vkBtn = this.quoteContainer.querySelector("[data-quote-vk-btn]");
    const loader = document.querySelector("[data-loader]");

    let apiQuotes = [];

    const showLoadingSpinner = () => {
      loader.hidden = false;
      this.quoteContainer.hidden = true;
    };

    const removeLoadingSpinner = () => {
      this.quoteContainer.hidden = false;
      loader.hidden = true;
    };

    const newQuote = () => {
      showLoadingSpinner();
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

      if (!quote.author) {
        this.quoteAuthor.textContent = "Unknown author";
      } else {
        this.quoteAuthor.textContent = quote.author;
      }

      if (quote.text.length > 80) {
        this.quoteText.classList.add("long-quote");
      } else {
        this.quoteText.classList.remove("long-quote");
      }

      this.quoteText.textContent = quote.text;
      removeLoadingSpinner();
    };

    async function getQuotes() {
      showLoadingSpinner();
      const apiUrl = "https://type.fit/api/quotes";
      try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
      } catch (error) {
        console.log("No quote", error);
      }
    }

    const postVk = () => {
      const VkUrl = `https://vk.com/share.php?title=${this.quoteText.textContent} - ${this.quoteAuthor.textContent}`;
      window.open(VkUrl, "_blank");
    };

    this.newQuoteBtn.addEventListener("click", newQuote);
    this.vkBtn.addEventListener("click", postVk);

    getQuotes();
  }
}

export default new quoteGenerator();
