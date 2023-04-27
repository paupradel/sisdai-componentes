<template>
  <div>
    <SisdaiLeerMasMenos alto_max="370px">
      <template v-slot:texto-corto>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto
          quia eligendi soluta quos eaque aliquam officia quo neque unde
          reiciendis assumenda maiores magnam quidem ex dignissimos laborum
          quibusdam sapiente.
        </p>
      </template>
      <template v-slot:texto-largo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          eligendi? Dolores, nobis! Odit atque veniam cumque porro tempore odio,
          fuga pariatur nulla natus veritatis
          <small>sint temporibus error</small>
          <strong>ducimus ut explicabo?</strong>
          <span> 🤓</span>
        </p>
      </template>
    </SisdaiLeerMasMenos>
  </div>
</template>
