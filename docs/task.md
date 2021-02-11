---
id: task
title: Task
sidebar_label: Task
slug: /task
---

## Task

Test is created to execute testing model. A model is required to create task. A model can be changed, but model's
revision at the time the task is created will be used for executing task. Task also require:

* Selenium Config
* Task Config

---

## Selenium Config

To test system under test, we need to choose some config to interact with it:

* Provider (e.g. Selenoid, BrowserStack, SauceLabs)
* Platform (e.g. Linux, Windows, Mac)
* Browser (e.g. Firefox, Chrome, Edge)
* Browser Version (e.g. 13.0, 87.0)
* Resolution (e.g. 1024x768)

## Task Config

To change behavior of the task, we can change these config:

1. Generator
1. Reducer
1. Notify Channels
