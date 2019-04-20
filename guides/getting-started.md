Getting Started
--

### Fork the Repository on GitHub

Visit the [`Learning-Fuze/senior-front-end-lessons`](github.com/Learning-Fuze/senior-front-end-lessons) GitHub repository and click the **Fork** button. GitHub will create a copy of the repository under your own account.

![Forking senior-front-end-lessons](images/forking-senior-front-end-lessons.gif)

### Clone Your Fork from GitHub

1. In your terminal, navigate to your `lfz` directory.
2. Visit your fork of the `senior-front-end-lessons` repository on GitHub and copy its URL.
3. Use `git clone` to clone your fork into your local `lfz` directory.

![Cloning fork of senior-front-end-lessons](images/cloning-senior-front-end-lessons.gif)

### Add the LearningFuze Upstream Repository

1. In your terminal, navigate to your `senior-front-end-lessons` repository.
2. Run the following command to add the original `Learning-Fuze/senior-front-end-lessons` as a remote repository.
```bash
git remote add upstream https://github.com/Learning-Fuze/senior-front-end-lessons
```
3. Run the following command to confirm that `upstream` was added to your local repository.
```bash
git remote -v
```

![Setting senior-front-end-lessons Upstream](images/setting-senior-front-end-lessons-upstream.gif)
