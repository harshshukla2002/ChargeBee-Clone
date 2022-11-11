document.querySelector("#home").addEventListener("click",function(){
    window.location.href="index.html"
})

document.querySelector("#product").addEventListener("mouseover", ProducthideShow)

document.querySelector("#product").addEventListener("mouseleave", hideHide)

document.querySelector("#solution").addEventListener("mouseover", SolutionhideShow)

document.querySelector("#solution").addEventListener("mouseleave", hideHide)

document.querySelector("#resource").addEventListener("mouseover", reshideShow)

document.querySelector("#resource").addEventListener("mouseleave", reshideHide)

let hidediv = document.querySelector("#hide")

function ProducthideShow() {
    hidediv.innerHTML = null;

    let div1 = document.createElement("div");
    let div1h1 = document.createElement("h1");
    div1h1.innerText = "Subscription Management";
    let div1p1 = document.createElement("p")
    div1p1.innerText = "Overview";
    let div1p2 = document.createElement("p")
    div1p2.innerText = "Create & Manage Plans"
    let div1p3 = document.createElement("p")
    div1p3.innerText = "Entitlements"
    let div1p4 = document.createElement("p")
    div1p4.innerText = "Pricing Managment"
    let div1p5 = document.createElement("p")
    div1p5.innerText = "Handle Trail Subscriptions"
    let div1p6 = document.createElement("p")
    div1p6.innerText = "Customer Self-Service Portal"
    let div1p7 = document.createElement("p")
    div1p7.innerText = "Mobile Solutions"
    div1.append(div1h1, div1p1, div1p2, div1p3, div1p4, div1p5, div1p6, div1p7)

    let div2 = document.createElement("div");
    let div2h1 = document.createElement("h1");
    div2h1.innerText = "Billing Automation";
    let div2p1 = document.createElement("p")
    div2p1.innerText = "Overview"
    let div2p2 = document.createElement("p")
    div2p2.innerText = "Usage Based Billing"
    let div2p3 = document.createElement("p")
    div2p3.innerText = "Invoicing Automation"
    let div2p4 = document.createElement("p")
    div2p4.innerText = "Quotes"
    let div2p5 = document.createElement("p")
    div2p5.innerText = "Proration"
    div2.append(div2h1, div2p1, div2p2, div2p3, div2p4, div2p5)

    let div3 = document.createElement("div");
    let div3h1 = document.createElement("h1");
    div3h1.innerText = "Recurring Payments";
    let div3p1 = document.createElement("p")
    div3p1.innerText = "Overview"
    let div3p2 = document.createElement("p")
    div3p2.innerText = "Multiple Payments Methods"
    let div3p3 = document.createElement("p")
    div3p3.innerText = "Multiple Payments Gateways"
    let div3p4 = document.createElement("p")
    div3p4.innerText = "Smart Dunning"
    let div3p5 = document.createElement("p")
    div3p5.innerText = "Chargeback Managment"
    let div3p6 = document.createElement("p")
    div3p6.innerText = "Checkout Experience"
    let div3p7 = document.createElement("p")
    div3p7.innerText = "Receivables"
    div3.append(div3h1, div3p1, div3p2, div3p3, div3p4, div3p5, div3p6, div3p7)

    let div4 = document.createElement("div");
    let div4h1 = document.createElement("h1");
    div4h1.innerText = "Accounting & Taxes";
    let div4p1 = document.createElement("p")
    div4p1.innerText = "Overview"
    let div4p2 = document.createElement("p")
    div4p2.innerText = "Revenue Recognition"
    let div4p3 = document.createElement("p")
    div4p3.innerText = "Manage Sales Taxes"
    let div4p4 = document.createElement("p")
    div4p4.innerText = "One-Click Reconciliation"
    div4.append(div4h1, div4p1, div4p2, div4p3, div4p4)

    let div5 = document.createElement("div");
    let div5h1 = document.createElement("h1");
    div5h1.innerText = "Customer Retention";
    let div5p1 = document.createElement("p")
    div5p1.innerText = "Tuckle Churn"
    let div5p2 = document.createElement("p")
    div5p2.innerText = "Retention Toolbox"
    let div5p3 = document.createElement("p")
    div5p3.innerText = "Biling + Retention"
    div5.append(div5h1, div5p1, div5p2, div5p3)

    hidediv.append(div1, div2, div3, div4, div5)
    hidediv.style.backgroundColor = "#B2EBF2"
}

function hideHide() {
    hidediv.innerHTML = null;
    hidediv.style.backgroundColor = ""
}

function SolutionhideShow() {
    hidediv.innerHTML = null;

    let div1 = document.createElement("div");
    let div1h1 = document.createElement("h1");
    div1h1.innerText = "ByRole";
    let div1p1 = document.createElement("p")
    div1p1.innerText = "Finance";
    let div1p2 = document.createElement("p")
    div1p2.innerText = "Sales"
    let div1p3 = document.createElement("p")
    div1p3.innerText = "RevOps"
    div1.append(div1h1, div1p1, div1p2, div1p3)

    let div2 = document.createElement("div");
    let div2h1 = document.createElement("h1");
    div2h1.innerText = "By Industry";
    let div2p1 = document.createElement("p")
    div2p1.innerText = " B2B SaaS"
    let div2p2 = document.createElement("p")
    div2p2.innerText = " E-learning"
    let div2p3 = document.createElement("p")
    div2p3.innerText = "Publishing"
    let div2p4 = document.createElement("p")
    div2p4.innerText = " Video & OT"
    div2.append(div2h1, div2p1, div2p2, div2p3, div2p4)

    let div3 = document.createElement("div");
    let div3h1 = document.createElement("h1");
    div3h1.innerText = "By Strategy";
    let div3p1 = document.createElement("p")
    div3p1.innerText = "Roll Out New Pricing"
    let div3p2 = document.createElement("p")
    div3p2.innerText = " Expand Globally"
    let div3p3 = document.createElement("p")
    div3p3.innerText = " Move Upmarket"
    let div3p4 = document.createElement("p")
    div3p4.innerText = "Shift to Subscriptions"
    div3.append(div3h1, div3p1, div3p2, div3p3, div3p4)

    let div4 = document.createElement("div");
    let div4h1 = document.createElement("h1");
    div4h1.innerText = "By Business Size";
    let div4p1 = document.createElement("p")
    div4p1.innerText = "Startup"
    let div4p2 = document.createElement("p")
    div4p2.innerText = "ScaleUp"
    let div4p3 = document.createElement("p")
    div4p3.innerText = " Enterprise"
    div4.append(div4h1, div4p1, div4p2, div4p3)

    let div5 = document.createElement("div");
    let div5h1 = document.createElement("h1");
    div5h1.innerText = "By Business Model";
    let div5p1 = document.createElement("p")
    div5p1.innerText = "Self-serve"
    let div5p2 = document.createElement("p")
    div5p2.innerText = "Sales-driven"
    div5.append(div5h1, div5p1, div5p2)

    hidediv.append(div1, div2, div3, div4, div5)
    hidediv.style.backgroundColor = "#B2EBF2"
}

let resdiv = document.querySelector("#res")

function reshideShow() {
    resdiv.innerHTML = null;
    let div1 = document.createElement("div");
    let div1h1 = document.createElement("h1");
    div1h1.innerText = "Learning Hub";
    let div1p1 = document.createElement("p")
    div1p1.innerText = "Learn everything that falls under the umbrella of subscription";
    div1.append(div1p1, div1h1)

    let div2 = document.createElement("div");
    let div2h1 = document.createElement("h1");
    div2h1.innerText = "YourCA blog";
    let div2p1 = document.createElement("p")
    div2p1.innerText = "Read our ever growing stories on saas, and get all the growth insight you need"
    div2.append(div2p1, div2h1)

    let div3 = document.createElement("div");
    let div3h1 = document.createElement("h1");
    div3h1.innerText = "YourCA Docs";
    let div3p1 = document.createElement("p")
    div3p1.innerText = "A quick overview of YourCA to help you and understand it"
    div3.append(div3p1, div3h1)

    resdiv.append(div1, div2, div3)
    resdiv.style.backgroundColor = "#B2EBF2"
}

function reshideHide() {
    resdiv.innerHTML = null;
    resdiv.style.backgroundColor = ""
}