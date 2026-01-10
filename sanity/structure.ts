import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Gestionar Contenido')
    .items([
      // Group: Página de Inicio
      S.listItem()
        .title('Página de Inicio')
        .child(
          S.list()
            .title('Secciones de Inicio')
            .items([
              S.documentTypeListItem('hero').title('Principal'),
              S.documentTypeListItem('trust').title('Confianza'),
              S.documentTypeListItem('featured').title('Autos Destacados'),
              S.documentTypeListItem('cta').title('Venta Asistida'),
            ])
        ),

      // Group: Página Vende
      S.listItem()
        .title('Página Vende')
        .child(
          S.list()
            .title('Secciones de Vende')
            .items([
              S.documentTypeListItem('vendeHero').title('Banner Principal'),
              S.documentTypeListItem('vendeForm').title('Formulario'),
              S.documentTypeListItem('vendeProcess').title('Proceso'),
              S.documentTypeListItem('vendeFaq').title('Preguntas Frecuentes'),
            ])
        ),

      // Group: Página Nosotros
      S.listItem()
        .title('Página Nosotros')
        .child(
          S.list()
            .title('Secciones de Nosotros')
            .items([
              S.documentTypeListItem('nosotrosHero').title('Banner Principal'),
              S.documentTypeListItem('nosotrosStats').title('Estadísticas'),
              S.documentTypeListItem('nosotrosInfo').title('Misión y Visión'),
            ])
        ),

      // Group: Página Contacto
      S.listItem()
        .title('Página Contacto')
        .child(
          S.list()
            .title('Secciones de Contacto')
            .items([
              S.documentTypeListItem('contactoHero').title('Banner Principal'),
              S.documentTypeListItem('contactoContent').title('Contenido y Mapa'),
            ])
        ),

      S.divider(),

      // Group: Inventario
      S.listItem()
        .title('Inventario de Autos')
        .child(
          S.list()
            .title('Gestión de Vehículos')
            .items([
              S.documentTypeListItem('auto').title('Autos en Venta'),
              S.documentTypeListItem('autoUsuario').title('Solicitudes de Usuarios'),
            ])
        ),

      S.divider(),

      // Group: Configuración Global
      S.listItem()
        .title('Global')
        .child(
          S.list()
            .title('Elementos Globales')
            .items([
              S.documentTypeListItem('header').title('Encabezado'),
              S.documentTypeListItem('footer').title('Pie de Página'),
            ])
        ),
    ])
