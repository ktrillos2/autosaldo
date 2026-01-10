import { type SchemaTypeDefinition } from 'sanity'
import { hero } from './hero'
import { header } from './header'
import { trust } from './trust'
import { featured } from './featured'
import { cta } from './cta'
import { footer } from './footer'

import { vendeHero } from './vende-hero'
import { vendeProcess } from './vende-process'
import { vendeForm } from './vende-form'
import { vendeFaq } from './vende-faq'

import { nosotrosHero } from './nosotros-hero'
import { nosotrosStats } from './nosotros-stats'
import { nosotrosInfo } from './nosotros-info'

import { contactoHero } from './contacto-hero'
import { contactoContent } from './contacto-content'

import { auto } from './auto'
import { autoUsuario } from './auto-usuario'

import { globals } from './globals'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    header,
    trust,
    featured,
    cta,
    footer,
    vendeHero,
    vendeProcess,
    vendeForm,
    vendeFaq,
    nosotrosHero,
    nosotrosStats,
    nosotrosInfo,
    contactoHero,
    contactoContent,
    auto,
    autoUsuario,
    globals,
  ],
}
