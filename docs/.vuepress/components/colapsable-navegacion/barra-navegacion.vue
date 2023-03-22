<template>
  <div>
    <nav class="navegacion navegacion-conacyt">
      <div class="nav-contenedor-identidad">
        <a
          href="#"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
            width="130"
            height="38"
            src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
            alt="Conacyt."
          />
        </a>
        <button class="nav-boton-menu">
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div class="nav-menu-contedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a
                href="#"
                class="nav-hipervinculo"
                >Menú</a
              >
            </li>
            <ColapsableNavegacion
              :titulo="'este es el titulo del submenu'"
              :clase_default="false"
              class="nav-contenedor-submenu"
            >
              <template v-slot:listado-contenido>
                <li>
                  <a
                    href="#"
                    class="nav-hipervinculo"
                    >Menú del submenu 1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="nav-hipervinculo"
                    >Menú del submenu 2</a
                  >
                </li>
              </template>
            </ColapsableNavegacion>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
