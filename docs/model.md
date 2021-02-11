---
id: model
title: Model
sidebar_label: Model
slug: /model
---

## Model

In Model-Based Testing, model is used to describe how a part of system under test works. Each tool can use different
model type. In SICOPE Model, model is single-color petrinet. Each model is consisting of places and transitions.
Each place and transition contains Selenium commands to interact with system under test.

## Place

Each page in web application can be considered as a place, but not always. Some places can be combined to describe a
state of a model at a time. A model can be in different places at the same time.

## Transition

Each action in web application (click a button, click a link) can be considered as a transition. A transition change
state of a model from some places to others. Each transition has a condition called guard.

---

## Command

Each place and transition can contain some commands. They are just Selenium commands. They are used to interact with
system under test. Each command is consisting with:

1. Command
1. Target
1. Value

Depend on the command, target can be element selector or window handler, and value can be text, or variable name.

---

## Guard

Guard is condition of a transition. A transition can only be applied if guard is evaluated to true. Each guard is a
Symfony's expression language.

## Revision

Each time a model is updated, new revision is created. That's why old tasks and bugs are not affected.
