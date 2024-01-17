import React from "react";

function article_1() {
	return {
		date: "17 Dec 2023",
		link: "https://medium.com/@zach.talmadge.webdev/sorting-searching-two-of-the-classics-2cc343191106",
		title: "Sorting & Searching: Two of The Classics",
		description:
			"Algorithms are the foundation of software engineering, and two important algorithms that every engineer should know are Insertion Sort and Binary Search. This blog aims to provide a detailed understanding of these algorithms and their implementation.",
		keywords: [
			"Insertion Sort",
			"Binary Sort",
			"Zach Talmadge",
			"Zachary Talmadge",
			"Zach T",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

function article_2() {
	return {
		date: "22 Nov 2023",
		link: "https://medium.com/@zach.talmadge.webdev/from-node-to-flask-deciphering-the-best-stack-for-your-next-project-053cce60d469",
		title: "From Node to Flask: Deciphering the Best Stack for Your Next Project",
		description:
			"A Head-to-Head Comparison of Today’s Leading Web Development Stacks",
		style: ``,
		keywords: [
			"Node",
			"Flask",
			"Zach Talmadge",
			"Zachary Talmadge",
			"Zach T",
		],
	};
}

function article_3() {
	return {
		date: "2 Nov 2023",
		title: "Ready, Set, Prep: Data Structures for Your Upcoming Tech Interview",
		link: "https://medium.com/@zach.talmadge.webdev/ready-set-prep-data-structures-for-your-upcoming-tech-interview-08d6f1b78eaa",
		description:
			"Navigating the complexities of tech interviews can be overwhelming, especially with the multitude of topics to master. This post aims to supplement the journey by honing in on two pivotal data structures: stacks and linked lists. Whether you’re a coding bootcamp student or just gearing up for your next interview, join us as we demystify these structures, delving into both their concepts and practical implementations, setting you on a clearer path to interview success.",
		style: ``,
		keywords: [
			"data structures",
			"linked list",
			"stack",
			"Zachary Talmadge",
			"Zach T",
		],
	};
}

function article_4() {
	return {
		date: "12 Oct 2023",
		title: "Code Switch: Moving To Python From JavaScript With Ease",
		link: "https://medium.com/@zach.talmadge.webdev/code-switch-moving-to-python-from-javascript-with-ease-4871c79e751a",
		description:
			"Embarking on the journey from JavaScript to Python doesn’t have to be a daunting task. Armed with the knowledge of JavaScript, you’re not starting from scratch but rather with a wealth of experience that can be translated and adapted. This post aims provide a brief introduction to Python and to bridge the gap between these two popular programming languages.",
		style: ``,
		keywords: [
			"python",
			"node",
			"Zach Talmadge",
			"Zachary Talmadge",
			"Zach T",
		],
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
