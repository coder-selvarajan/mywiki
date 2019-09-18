---
id: docker-overview
title: Docker Overview
---

Docker is a platform to develop, deploy, and run applications inside containers. Docker is essentially synonymous with containerization. If you’re a current or aspiring software developer or data scientist, Docker is in your future.

Other Tutorial links here  
https://docker-curriculum.com/#introduction  
https://www.tutorialspoint.com/docker/

## Container

Like a physical plastic container, a Docker container:

- **Holds things** — Something is either inside the container or outside the container.
- **Is portable** — It can be used on your local machine, your coworker’s machine, or a cloud provider’s servers (e.g. AWS). Sort of like that box of childhood knickknacks you keep moving with you from home to home.
- **Has clear interfaces for access** — Our physical container has a lid for opening and putting things in and taking things out. Similarly, a Docker container has several mechanisms for interfacing with the outside world. It has ports that can be opened for interacting through the browser. You can configure it to interact with data through the command line.
- **Can be obtained from a remote location** — You can get another empty plastic container from Amazon.com when you need it. Amazon gets its plastic containers from manufacturers who stamp them out by the thousands from a single mold. In the case of a Docker container, an offsite registry keeps an image, which is like a mold, for your container. Then when you need a container you can make one from the image.


## Concepts
### Virtual Machines

Virtual machines are the precursors to Docker containers. Virtual machines also isolate an application and its dependencies. However, Docker containers are superior to virtual machines because they take fewer resources, are very portable, and are faster to spin up. Check out this article for a great discussion of the similarities and differences.

### Docker Image
I mentioned images above. What’s an image? I’m glad you asked! The meaning of the term image in the context of Docker doesn’t map all that well to a physical image.

Docker images are more like blueprints, cookie cutters, or molds. Images are the immutable master template that is used to pump out containers that are all exactly alike.

An image contains the Dockerfile, libraries, and code your application needs to run, all bundled together.

### Dockerfile
A Dockerfile is a file with instructions for how Docker should build your image.

The Dockerfile refers to a base image that is used to build the initial image layer. Popular official base images include python, ubuntu, and alpine.

Additional layers can then be stacked on top of the base image layers, according to the instructions in the Dockerfile. For example, a Dockerfile for a machine learning application could tell Docker to add NumPy, Pandas, and Scikit-learn in an intermediate layer.

Finally, a thin, writable layer is stacked on top of the other layers according to the Dockerfile code. (You understand that a thin layer is small in size because you intuitively understand the thin metaphor, right 😃?)

I’ll explore Dockerfiles in more depth in future articles in this series.

### Docker Container
A Docker image plus the command docker run image_name creates and starts a container from an image.

### Container Registry
If you want other people to be able to make containers from your image, you send the image to a container registry. Docker Hub is the largest registry and the default.



## Cooking with Docker

Phew! That’s a lot of pieces. Let’s put this all together in terms of making a pizza.

- The recipe is like the Dockerfile. It tells you what to do to get to your end goal.
- The ingredients are the layers. You’ve got crust, sauce, and cheese for this pizza.

Think of the recipe and the ingredients combined as an all-in-one pizza-making-kit. It’s the Docker image.

The recipe (Dockerfile) tells us what we’re going to do. Here’s the plan:

- The crust is preformed and immutable, it’s like a basic ubuntu parent image. It’s the bottom layer and gets built first.
- Then you’ll add some cheese. Adding this second layer to the pizza is like installing an external library — for example NumPy.
- Then you’ll sprinkle on some basil. The basil is like the code in a file that you wrote to run your app.

Alright, let’s get cooking.

- The oven that bakes the pizza is like the Docker platform. You installed the oven into your house when you moved in so you could make things with it. Similarly, you installed Docker onto your computer so you could cook up containers.
- You start your oven by turning a knob. The docker run image_name command is like your knob — it creates and starts your container.
- The cooked pizza is like a Docker container.
- Eating the pizza is like using your app.

Like making a pizza, making an app in a Docker container takes some work, but at the end you have something great. Enjoy 🍕!


## Docker Ecosystem Terms

I’ve broken Docker terms into two categories for easier mental model creation: Essentials and Scaling. Let’s hit the eight essentials first.

### Docker Essentials

- **Platform** — the software that makes Docker containers possible
- **Engine** — client-server app (CE or Enterprise)
- **Client** — handles Docker CLI so you can communicate with the Daemon
- **Daemon** — Docker server that manages key things
- **Volumes** — persistent data storage
- **Registry** — remote image storage
- **Docker Hub** — default and largest Docker Registry
- **Repository** — collection of Docker images, e.g. Alpine

### Scaling Docker

- **Networking** — connect containers together
- **Compose** — time saver for multi-container apps
- **Swarm** — orchestrates container deployment
- **Services** — containers in production

Because we’re keeping with food metaphors, and everyone loves a baker’s dozen, we have one more related term for you: Kubernetes.

**Kubernetes**

Kubernetes automates deployment, scaling, and management of containerized applications. It’s the clear winner in the container orchestration market. Instead of Docker Swarm, use Kubernetes to scale up projects with multiple Docker containers. Kubernetes isn’t an official part of Docker; it’s more like Docker’s BFF.

I have a whole series on Kubernetes in the works. Kubernetes is pretty awesome.

Now that you know the conceptual landscape and common terms I suggest you try out Docker.