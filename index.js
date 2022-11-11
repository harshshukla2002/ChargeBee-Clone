document.querySelector("#home").addEventListener("click",function(){
    window.location.href="index.html"
})

var i = 0;
var images = []
var head = [];

head[0] = "The subscription management platform that enabled Slidebean to slide into 30+ countries."
head[1] = "The billing platform that gives Superfoods the freedom to test, iterate, and roll-back."
head[2] = "The revenue engine that powered MakeSpace to launch a B2B model overnight."
head[3] = "The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR."
head[4] = "The infrastructure that allows Rise Vision to ask What Does This Make Possible?"
images[0] = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/debbie-barrafato.webp"
images[1] = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/antoine-louiset.webp"
images[2] = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/rahul-gandhi.webp"
images[3] = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/paul-kapsner.webp"
images[4] = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/jose-bolanos.webp"

function changeImg() {
    document.querySelector("#image").src = images[i];
    document.querySelector("#heading").innerText = head[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", 4000)
}

window.onload = changeImg()

let maindiv = document.querySelector("#content")

document.querySelector("#bill").addEventListener("click", function () {
    maindiv.innerHTML = null;
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerText = "Align Billing Workflow with GTM Strategy"
    let p = document.createElement("p")
    p.innerText = "Adjust price structures, product bundles, discount management, and recovery processes to maximize revenue."

    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let span1 = document.createElement("span")
    span1.innerText = "Price-modeling"
    let img1 = document.createElement("img")
    img1.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li1.append(img1, span1)
    let li2 = document.createElement("li")
    let span2 = document.createElement("span")
    let img2 = document.createElement("img")
    span2.innerText = "Usage-based Billing"
    img2.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li2.append(img2, span2)
    let li3 = document.createElement("li")
    let span3 = document.createElement("span")
    span3.innerText = "Plan & Product Catalog"
    let img3 = document.createElement("img")
    img3.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li3.append(img3, span3)
    let li4 = document.createElement("li")
    let span4 = document.createElement("span")
    span4.innerText = "480+ Billing Scenarios"
    let img4 = document.createElement("img")
    img4.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li4.append(img4, span4)

    ul.append(li1, li2, li3, li4)
    let a = document.createElement("a")
    let href = document.createAttribute("href")
    a.href = "#"
    a.innerText = "Learn More"

    div1.append(h1, p, ul, a);

    let image = document.createElement("img")
    image.src = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/billing-experiments.svg"

    div2.append(image)

    maindiv.append(div1, div2)
})

document.querySelector("#rev").addEventListener("click", function () {
    maindiv.innerHTML = null;
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerText = "Drive Decisions with 360° Revenue Reporting"
    let p = document.createElement("p")
    p.innerText = "Recognize revenue accurately, forecast business growth, and plug leaks across your order-to-revenue cycle with real-time insights."

    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let span1 = document.createElement("span")
    span1.innerText = "Deferred Revenue Reporting"
    let img1 = document.createElement("img")
    img1.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li1.append(img1, span1)
    let li2 = document.createElement("li")
    let span2 = document.createElement("span")
    let img2 = document.createElement("img")
    span2.innerText = "Revenue Recognition"
    img2.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li2.append(img2, span2)
    let li3 = document.createElement("li")
    let span3 = document.createElement("span")
    span3.innerText = "Churn Reporting"
    let img3 = document.createElement("img")
    img3.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li3.append(img3, span3)
    let li4 = document.createElement("li")
    let span4 = document.createElement("span")
    span4.innerText = "Report Builder"
    let img4 = document.createElement("img")
    img4.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li4.append(img4, span4)

    ul.append(li1, li2, li3, li4)
    let a = document.createElement("a")
    let href = document.createAttribute("href")
    a.href = "#"
    a.innerText = "Learn More"

    div1.append(h1, p, ul, a);

    let image = document.createElement("img")
    image.src = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/revenue-intelligence.svg"

    div2.append(image)

    maindiv.append(div1, div2)
})

document.querySelector("#sub").addEventListener("click", function () {
    maindiv.innerHTML = null;
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerText = "Automate the Order-to-Revenue Lifecycle"
    let p = document.createElement("p")
    p.innerText = "Collect recurring payments and automate your subscription billing logic - from checkout to reconciliation."

    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let span1 = document.createElement("span")
    span1.innerText = "Quote-to-Cash"
    let img1 = document.createElement("img")
    img1.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li1.append(img1, span1)
    let li2 = document.createElement("li")
    let span2 = document.createElement("span")
    let img2 = document.createElement("img")
    span2.innerText = "Trial Management"
    img2.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li2.append(img2, span2)
    let li3 = document.createElement("li")
    let span3 = document.createElement("span")
    span3.innerText = "Tax Management"
    let img3 = document.createElement("img")
    img3.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li3.append(img3, span3)
    let li4 = document.createElement("li")
    let span4 = document.createElement("span")
    span4.innerText = " Lifecycle Automation"
    let img4 = document.createElement("img")
    img4.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li4.append(img4, span4)

    ul.append(li1, li2, li3, li4)
    let a = document.createElement("a")
    let href = document.createAttribute("href")
    a.href = "#"
    a.innerText = "Learn More"

    div1.append(h1, p, ul, a);

    let image = document.createElement("img")
    image.src = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/subscription-automation.svg"

    div2.append(image)

    maindiv.append(div1, div2)
})

document.querySelector("#ex").addEventListener("click", function () {
    maindiv.innerHTML = null;
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerText = "Scale Revenue Stack for Each Stage of Growth"
    let p = document.createElement("p")
    p.innerText = "Upgrade finance, accounting, CRM, and more, on the revenue engine that scales with you."

    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let span1 = document.createElement("span")
    span1.innerText = "Sales, Revenue & Marketing"
    let img1 = document.createElement("img")
    img1.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li1.append(img1, span1)
    let li2 = document.createElement("li")
    let span2 = document.createElement("span")
    let img2 = document.createElement("img")
    span2.innerText = "Accounting & Finance"
    img2.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li2.append(img2, span2)
    let li3 = document.createElement("li")
    let span3 = document.createElement("span")
    span3.innerText = "Support & Engagement"
    let img3 = document.createElement("img")
    img3.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li3.append(img3, span3)
    let li4 = document.createElement("li")
    let span4 = document.createElement("span")
    span4.innerText = "Inventory & Logistics"
    let img4 = document.createElement("img")
    img4.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li4.append(img4, span4)

    ul.append(li1, li2, li3, li4)
    let a = document.createElement("a")
    let href = document.createAttribute("href")
    a.href = "#"
    a.innerText = "Learn More"

    div1.append(h1, p, ul, a);

    let image = document.createElement("img")
    image.src = "https://webstatic.chargebee.com/assets/web/535/images/home/coc/integration.svg"

    div2.append(image)

    maindiv.append(div1, div2)
})

document.querySelector("#enter").addEventListener("click", function () {
    maindiv.innerHTML = null;
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerText = "Promise Secure Subscription Experiences"
    let p = document.createElement("p")
    p.innerText = "Stay compliant with the latest taxation and privacy regulations to enter and scale new markets with agility."

    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let span1 = document.createElement("span")
    span1.innerText = "SOC1 & SOC 2 Compliant"
    let img1 = document.createElement("img")
    img1.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li1.append(img1, span1)
    let li2 = document.createElement("li")
    let span2 = document.createElement("span")
    let img2 = document.createElement("img")
    span2.innerText = "GDPR Ready"
    img2.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li2.append(img2, span2)
    let li3 = document.createElement("li")
    let span3 = document.createElement("span")
    span3.innerText = "PCI-DSS Level 1"
    let img3 = document.createElement("img")
    img3.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li3.append(img3, span3)
    let li4 = document.createElement("li")
    let span4 = document.createElement("span")
    span4.innerText = "99.9% Uptime"
    let img4 = document.createElement("img")
    img4.src = "https://imgs.search.brave.com/KgJDNL0WEfHfnRLXB7VY1dIBk6FHU4Bk1Mb42Wd3xqM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/aWllUHJlSGQ3ZS1y/RmpWSkpJaDlRSGFI/YSZwaWQ9QXBp"
    li4.append(img4, span4)

    ul.append(li1, li2, li3, li4)
    let a = document.createElement("a")
    let href = document.createAttribute("href")
    a.href = "#"
    a.innerText = "Learn More"

    div1.append(h1, p, ul, a);

    let image = document.createElement("img")
    image.src = "	https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/security.webp"

    image.style.width = "60%"
    image.style.paddingLeft = "30%"

    div2.append(image)

    maindiv.append(div1, div2)
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