import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'p1d9g9gr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'skuCXU2vVhxWXYLb3otL4aFLtPcE8vCpFqMbMyvaLQTdrrjTKLSCo8ksZOg1poVrvhNhRRMLT7dShR1ZxcPnrtrdVneyZpyf1eSU5neKW7SywzJUwyfqX8RRZkhrMmBD4R3jgxZ2L3RkwqIrDhI4oDcy3719GQLeLhrWr0Dq4FVO4zhobYUY'
})

async function main() {
  const query = '*[_type == "hero"][0]'
  const existing = await client.fetch(query)

  const newFields = {
    _type: 'hero',
    overline: 'Compra y venta de autos usados',
    titlePart1: 'Tu próximo \nauto te espera, \n',
    titlePart2: 'con respaldo \nen cada paso.',
    subtitlePart1: 'Autos usados seleccionados,',
    subtitlePart2: 'confianza garantizada.',
    highlightBoxTitlePart1: 'Tu compra segura,',
    highlightBoxTitlePart2: 'nuestra promesa.',
    highlightBoxText: 'Transparencia, confianza y respaldo \nen cada auto.',
    bottomBarBrand: 'AUTOSALDO',
    bottomBarSlogan: 'Más que autos, confianza que te lleva lejos.',
    bottomBarLocation: 'Lima, Perú',
    bottomBarWebsite: 'www.autosaldo.com',
    features: [
      { _key: 'f1', title: 'Autos\nSeleccionados', subtitle: 'Calidad verificada' },
      { _key: 'f2', title: 'Respaldo y\nConfianza', subtitle: 'Compra segura' },
      { _key: 'f3', title: 'Papeles en\nRegla', subtitle: 'Trámites sin complicaciones' },
      { _key: 'f4', title: 'Asesoría\nPersonalizada', subtitle: 'Te acompañamos siempre' }
    ]
  }

  if (existing) {
    console.log('Updating existing hero document:', existing._id)
    await client.patch(existing._id).set(newFields).commit()
    console.log('Updated!')
  } else {
    console.log('Creating new hero document...')
    await client.create(newFields)
    console.log('Created!')
  }
}

main().catch(console.error)
