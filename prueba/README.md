# Guía de Vagrant - Verificación de Puertos de Reenvío

Este directorio contiene un ejemplo de configuración de Vagrant con múltiples máquinas virtuales.

## Pasos Realizados

### 1. Crear el directorio "prueba"
```bash
mkdir prueba
cd prueba
```

### 2. Crear el Vagrantfile
El archivo `Vagrantfile` en este directorio define dos máquinas virtuales con puertos de reenvío configurados.

### 3. Crear y configurar las máquinas
```bash
vagrant up
```

### 4. Verificar el Puerto de Reenvío para cada Máquina Virtual

Hay varias formas de verificar los puertos de reenvío configurados para las máquinas virtuales:

#### Método 1: Usar el comando `vagrant port`

Este es el método más directo para verificar los puertos de reenvío:

```bash
# Para ver los puertos de una máquina específica
vagrant port vm1
```

**Salida esperada:**
```
    22 (guest) => 2222 (host)
    80 (guest) => 8080 (host)
```

Para ver los puertos de todas las máquinas:
```bash
vagrant port vm1
vagrant port vm2
```

#### Método 2: Usar el comando `vagrant ssh-config`

Este comando muestra la configuración SSH, incluyendo el puerto de reenvío SSH:

```bash
vagrant ssh-config vm1
```

**Salida esperada:**
```
Host vm1
  HostName 127.0.0.1
  User vagrant
  Port 2222
  UserKnownHostsFile /dev/null
  StrictHostKeyChecking no
  PasswordAuthentication no
  IdentityFile /ruta/.vagrant/machines/vm1/virtualbox/private_key
  IdentitiesOnly yes
  LogLevel FATAL
```

El campo `Port 2222` indica el puerto de reenvío SSH.

#### Método 3: Verificar durante el inicio de la máquina

Cuando ejecutas `vagrant up`, Vagrant muestra información sobre los puertos de reenvío:

```bash
vagrant up vm1
```

**Salida esperada (fragmento):**
```
==> vm1: Forwarding ports...
    vm1: 80 (guest) => 8080 (host) (adapter 1)
    vm1: 22 (guest) => 2222 (host) (adapter 1)
```

#### Método 4: Verificar en VirtualBox (si usas el proveedor de VirtualBox)

Si estás usando VirtualBox como proveedor:

1. Abre VirtualBox UI
2. Selecciona la máquina virtual
3. Haz clic en "Configuración" → "Red"
4. En el adaptador configurado, haz clic en "Avanzado" → "Reenvío de puertos"
5. Verás una tabla con todos los puertos reenviados

#### Método 5: Listar el estado de todas las máquinas

Para ver el estado de todas las máquinas y sus configuraciones:

```bash
vagrant status
```

**Salida esperada:**
```
Current machine states:

vm1                       running (virtualbox)
vm2                       running (virtualbox)

This environment represents multiple VMs. The VMs are all listed
above with their current state.
```

## Resumen

Para responder la pregunta **"¿Cómo hago el punto 4?"** (Verificar el puerto de reenvío):

**La forma más directa es usar:**
```bash
vagrant port <nombre_de_la_maquina>
```

**Ejemplo:**
```bash
vagrant port vm1
```

Esto mostrará todos los puertos de reenvío configurados para esa máquina virtual, donde verás algo como:
```
22 (guest) => 2222 (host)
80 (guest) => 8080 (host)
```

En este ejemplo, **2222** es el puerto de reenvío en el host que redirige al puerto 22 (SSH) en la máquina virtual.

## Comandos Útiles Adicionales

```bash
# Ver el estado de todas las máquinas
vagrant status

# Conectarse a una máquina específica vía SSH
vagrant ssh vm1

# Detener una máquina
vagrant halt vm1

# Destruir una máquina
vagrant destroy vm1

# Ver información detallada de SSH
vagrant ssh-config vm1
```
