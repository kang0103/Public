document.addEventListener("DOMContentLoaded", function() {
    // 성분 보기/숨기기 토글
    const ingredientDetails = document.getElementById("ingredient-details");
    const ingredientSummary = document.getElementById("ingredient-summary");

    ingredientDetails.addEventListener("toggle", function() {
        if (ingredientDetails.open) {
            ingredientSummary.textContent = "- 성분 숨기기";
        } else {
            ingredientSummary.textContent = "+ 성분 보기";
        }
    });

    // 사용방법 보기/숨기기 토글
    const usageDetails = document.getElementById("usage-details");
    const usageSummary = document.getElementById("usage-summary");

    usageDetails.addEventListener("toggle", function() {
        if (usageDetails.open) {
            usageSummary.textContent = "- 사용방법 숨기기";
        } else {
            usageSummary.textContent = "+ 사용방법";
        }
    });
});
