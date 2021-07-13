# Imersão FullCycle Desafio 3

## Table of Contents

- [Sobre](#about)
- [Como usar](#usage)

## Sobre <a name = "about"></a>

Projeto criado para cumprir o 3º desafio da Imersão FullCycle 3.0

## Como usar <a name = "usage"></a>

Após fazer o clone do projeto é necessário criar um cluster K8s (usando a ferramenta desejada, p. ex.: kind, k3d etc.).

Após a criação do cluster é necessário aplicar os manifestos k8s localizados na pastas [k8s](k8s) usando os comandos 

```
$: cd k8s
$: kubectl apply --all -f . 
```

Após aplicados os manifestos é necessário encaminhar as portas locais para as portas do cluster k8s.

Em uma instância do terminal:

```
$: kubectl port-forward svc/imersao-fullcycle-3-desafio-3-frontend 8000:3001
```

Em outra instância do terminal:

```
$: kubectl port-forward svc/imersao-fullcycle-3-desafio-3-api 8000:3000
```