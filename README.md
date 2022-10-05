<div align="center">
    <h1>Awesome Javascript</h1>
   <h4>A Collection of Awesome JavaScript Projects made by community</h4>
</div>
<p align="center">
    <img src="/assets/javascript-banner.png" align="center" />
</p>

<br />

## Rules
- Create a Issue first on the Project Name.
- If the issue got accepted it will get `hacktoberfest` and `hacktoberfest-accepted` label. And you can then contribute on the project.
- Do not spam with multiple projects.
- Follow the [Contributing Guide](/contributing.md).
- Follow the [Folder Name Guidelines](#project-folder-name-guidelines) before contribute.

## Contributing Guide

- Fork this repo (button on top)
- Clone on your local machine

```
git clone https://github.com/Mridul2820/awesome-javascript.git
```

- Navigate to project directory.

```
cd awesome-javascript
```

- Create a new Branch

```markdown
git checkout -b my-new-branch
```

- Create a new folder in the `/projects/` and add your project in it.

```
/projects/your-project-name
```

### Project Folder Name Guidelines

✅ your-project-name
<br>
❌ your project name
<br>
❌ Your project name
<br>
❌ Your Project Name
<br>
❌ Your-Project-Name

Note: Please add a different name for your project folder. If you are adding a project with the same name as an existing project, please add a number at the end of the folder name. For example, if you are adding a project named `Calculator`, and there is already a project named `Calculator`, then please name your project folder as `Calculator-2`.

- Add your changes

```
git add .
```

- Commit your changes.

```markdown
git commit -m "Relevant message"
```

- Then push

```
git push origin my-new-branch
```

- Create a new pull request from your forked repository

<br>

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.

```terminal
git remote add upstream https://github.com/mridul2820/awesome-javascript
```

You can verify that the new remote has been added by typing

```terminal
git remote -v
```

To pull any new changes from your parent repo simply run

```terminal
git merge upstream/master
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks [read this article from Github](https://help.github.com/articles/syncing-a-fork/).

## ⭐ Project Contributors

<a href="https://github.com/Mridul2820/awesome-javascript/graphs/contributors" align="center">
  <img src="https://contrib.rocks/image?repo=Mridul2820/awesome-javascript" />
</a>
