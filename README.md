# Actionforge VS Code Extension
<!-- markdownlint-disable MD033 -->

Welcome to the source code of the Actionforge VS Code Extension

<div align="center" width="100%">
  <!-- No SVG due to VS Code Marketplace restrictions-->
  <img src="assets/logo.png" alt="Actionforge VS Code Extension logo">

[![view-action-graph](https://img.shields.io/github/actions/workflow/status/actionforge/vscode-ext/build-and-publish.yml?label=View%20Action%20Graph)](https://www.actionforge.dev/github/actionforge/vscode-ext/main/.github/workflows/graphs/build-and-publish.yml)
[![made-with-ts](https://img.shields.io/badge/Made%20with-TS-3178C6.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-ACL-blue?color=orange)](https://www.github.com/actionforge/legal/blob/main/LICENSE.md)

</div>

Actionforge supercharges your GitHub Actions workflow experience in VS Code. Designed for time saving, this extension integrates seamlessly into your coding environment, offering a suite of tools to help you manage your GitHub Actions workflows. Whether you're a beginner or a seasoned developer, Actionforge helps set up your workflows within minutes, not hours. You can finally say good bye to tedious editing of YAML files.

<div align="center" width="100%">
  <img src="assets/graph-editor.jpg" alt="Graph Editor Screenshot">
</div>

## Video Tutorial

<div align="center" width="100%">
  <a href="https://www.actionforge.dev/tour/vscode">
    <img src="media/graph-editor/assets/tour01.jpg" alt="Actionforge Tour">
  </a>
</div>

## Create your first workflow

The easiest way to create a workflow is to use the command called `Create a new action graph for GitHub Actions workflow`.

<div align="center" width="100%">
  <img src="assets/create-1.jpg" alt="VS Code Extension Command">
</div>

Select a name for your workflow and press `Enter`.

<div align="center" width="100%">
  <img src="assets/create-2.jpg" alt="VS Code Extension Command">
</div>

The extension will now create two files, a workflow file and an action graph file.

<div align="center" width="100%">
  <img src="assets/create-3.jpg" alt="VS Code Extension Command">
</div>

### Why two files?

In order to use an action graph in your workflow, Actionforge needs two files.

The first one is a traditional GitHub Action workflow with a **single** step that runs the `actionforge/action` action. Here is an example file of

#### my-workflow.yml

```yaml
on: [push]

jobs:
    build-and-publish:
      runs-on: ubuntu-latest
      name: My workflow
      steps:
        - name: Execute Action Graph
          uses: actionforge/action@1cb7c397d2c7caa8d8071041976b6f2e4e2ead20  # v0.9.58
          with:
            graph_file: my-workflow.yml

            # Uncomment to use secrets within the action graph.
            # secrets: ${{ toJson(secrets) }}

            # Uncomment to pass inputs from a 'workflow_dispatch' event.
            # inputs: ${{ toJson(inputs) }}

            # Uncomment to access values set by the matrix strategy.
            # matrix: ${{ toJson(matrix) }}
```

The second one is the action graph itself. This is a YAML file that you can edit via the graph editor that is part of this extension.

## Add third-party GitHub Actions to your workflow

In order to add GitHub Actions to the node list, visit the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=actionforge.graph-runner).

### 1) Select a version

Select the version you want to use, usually the latest version. Click on the green button.

<div align="center" width="100%">
  <img src="assets/load-1.jpg" alt="Load GH Action Step 1">
</div>

### 2) Copy

Coy the snippet below to the clipboard.

<div align="center" width="100%">
  <img src="assets/load-2.jpg" alt="Load GH Action Step 2">
</div>

### 3) Paste

Paste the snippet into the text field of the graph editor and click on the `Load GitHub Action` button.

<div align="center" width="100%">
  <img src="assets/load-3.jpg" alt="Load GH Action Step 3">
</div>

After the action has been loaded, you can create a new node.

## License

This SOFTWARE is licensed under the Actionforge Community License that you can find [here](https://github.com/actionforge/legal/blob/main/LICENSE.md).

Licenses for commercial use will soon be available on the GitHub Marketplace.

For further information [Get in touch](mailto:hello@actionforge.dev).
