Before Each Lesson
--

When you are about to begin a lesson you'll want to make sure that your local files are up-to-date with any changes made to the learning materials. The code you write for the next lesson should be on its own branch.

1. In your terminal, navigate to your `senior-front-end-lessons` repository.
2. Check `git status` to ensure that you don't have any untracked changes. You should have nothing to commit and a clean working tree before continuing.
    `git status`
3. Check out the `master` branch.
    ```bash
    git checkout master
    ```
4. Pull any available updates from the LearningFuze `upstream` repository.
    ```bash
    git pull upstream master
    ```
5. Check out a new branch for the new lesson. **The _real_ name of this new branch is in the instructions for the lesson.**
    ```bash
    git checkout -b <name-of-lesson>
    ```

![Before Each Lesson](images/before-each-lesson.gif)
