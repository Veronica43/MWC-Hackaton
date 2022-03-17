## Hackathon 4YFN - MWC Barcelona 2022

- Deploy: https://mwc22-equipo3.vercel.app/

### ✈️ Contexto

En la última Asamblea General Anual de la IATA se aprobó una resolución para conseguir llegar a cero emisiones netas de CO2 en 2050 (sector de la aviación).

Esto permite estar un paso más cerca a los Acuerdos de París del 2015, en el que se acordó no sobrepasar en 1,5ºC la temperatura media de la Tierra.

Las soluciones que se proponen para conseguir este hito pasan por :

- utilizar combustibles sostenibles
- tecnología aeronáutica de última generación,
- infraestructuras más eficientes, etc.

### 🦾 Sobre el reto

Y el campo en el que se centra este reto es en el de operaciones. La optimización de rutas y la planificación de vuelos para asegurar llevar el máximo número de pasajeros y no malbaratar gastos operacionales.

Así pues, el reto consistirá en realizar una plataforma que permita analizar parámetros de rutas aéreas y predecir la demanda que habrá por vuelo.

A continuación podéis ver un esquema general de lo que tenéis que desarrollar:

![sobre](https://challenges-asset-files.s3.us-east-2.amazonaws.com/MWC+'22/Esquema+general.png)

### 📊 DATA SCIENCE

La información de la que dispondréis es del histórico de rutas aéreas.

#### Datasets:

Variables del dataset:

- Date: Fecha del vuelo.
- Origin_Country : País de origen.
- Origin_Continent : Continente de origen.
- Destination_Country: País de destino.
- Destination_Continent: Continente de destino.
- Total_flights: Número total de vuelos.
- Total_seats: Número total de asientos.
- Total_ASKs: (Available Seat Kilometer). Variable target. Número total de asientos disponibles por el número total de km que esos asientos han volado.

Archivos:

- train.csv (Este dataset contiene tanto las variables predictoras como la variable target)
- test.csv (Este dataset contiene tanto las variables predictoras como la variable target)

#### Tenéis la siguiente misión:

1. Hacer un análisis exploratorio de los datos que permita entenderlos mejor y sacar insights (ej: vuelos por mes, rutas más empleadas, etc.)

2. Crear un modelo predictivo que permita predecir la variable “Total ASKs” del dataset en función del resto de variables predictoras.

La métrica que se empleará para evaluar el algoritmo predictivo será el error absoluto. Este error se calculará. 1) Suma todas las predicciones de tu modelo. 2) Restale a la suma de los valores reales de 'Total_ASKs', la suma de tus predicciones.

La suma total del valor 'Total_ASKs' del dataset de test es: 237270289245

Por lo tanto, el error de tu modelo se calculará restándole al valor 237270289245 la suma de tus predicciones y convirtiendo este resultado en valor absoluto. Este resultado es el que se comparará con el del resto de equipos para la evaluación.

![formula](https://storage.googleapis.com/bairro-alto.appspot.com/Formula-1646519892030.webp)

### ✨ FRONTEND

El equipo de Frontend tendrá que generar un dashboard desde el cual el cliente podrá visualizar los datos que considere necesarios para poder tomar decisiones. Lo mínimo a desarrollar será lo siguiente:

1. Una vista desde dónde poder añadir compañías

2. Una vista desde dónde poder añadir vuelos

3. Un panel principal con una tabla de compañías dónde salen todos los datos (modelo Company)

4. Una vista en modo de tabla con los datos que se enviarán desde el departamento de DATA (Variables predictoras + Target (explicado en el apartado de DATA SCIENCE)).

Como extra se puede añadir la vista para modificar compañías y vuelos y que desde las tablas se pueda eliminar información.

Los modelos a que se utilizarán serán:

1. Flight:

- Id (UUID)
- CompanyID
- Date
- Origin country
- Origin continent
- Destination continent
- Destination country
- Seats

2. Company:

- Id (UUID)
- Name
- Website
- Total flights
- Total seats

![front](https://challenges-asset-files.s3.us-east-2.amazonaws.com/MWC+'22/Frontend.png)

### ⚙️ BACKEND

El equipo de Backend deberá crear una API rest que permita hacer CRUD (Create, Read, Update, Delete) del modelos Flight y Company.

Tendrá que llevar también el conteo total de vuelos y asientos de cada compañía y generar dos endpoints adicionales para poder:

1. Enviar la información que le pase el equipo de Data

2. Enviar toda la información de las compañías disponible para poder mostrarlas en el front

Los modelos a que se utilizarán serán:

1. Flight:

- Id (UUID)
- CompanyID
- Date
- Origin country
- Origin continent
- Destination continent
- Destination country
- Seats

2. Company:

- Id (UUID)
- Name
- Website
- Total flights
- Total seats

![back](https://challenges-asset-files.s3.us-east-2.amazonaws.com/MWC+'22/Backend.png)

### ⏳ Timeline

Aquí podéis consultar el timeline del 1 de marzo:

![timeline](https://challenges-asset-files.s3.us-east-2.amazonaws.com/MWC+'22/Timeline.png)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
