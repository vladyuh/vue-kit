<template>
  <div class="home">
    <div class="container home-container">
      <breadcrumbs
          :items="breadcrumbs"
      />
      <h2>Кнопки</h2>
      <div class="buttons" style="display: flex; flex-direction: column; gap: 12px">
        <btn
            no-rounded
        >
          <span>Primary</span>
        </btn>
        <btn
            no-rounded
            spinner
        >
          <span>Spinner</span>
        </btn>
        <btn
            no-rounded
            bordered
        >
          <span>Secondary</span>
        </btn>
        <btn
            dashed
        >
          <span>Dashed</span>
        </btn>
      </div>
      <h2>Чекбоксы</h2>
      <checkbox
        label="Unchecked"
      />
      <checkbox
          label="Unchecked and disabled"
          :disabled="true"
      />
      <checkbox
          label="Checked"
          :value="true"
      />
      <checkbox
          label="Checked and disabled"
          :disabled="true"
          :value="true"
      />
      <h2>Радиокнопки</h2>
      <radio
          name="radio"
          label="Unchecked"
      />
      <radio
          name="radio"
          label="Unchecked and disabled"
          :disabled="true"
      />
      <radio
          name="radio"
          label="Checked and disabled"
          :disabled="true"
          :value="true"
      />
      <h2>Выпадающий список</h2>
      <div class="selects" style="display: flex; flex-direction: column; gap: 12px">
        <custom-select
            placeholder="Select option"
            :options="options"
        />
        <custom-select
            placeholder="Select option"
            icon-name="ic_apps"
            :options="options"
        />
      </div>
      <h2>Текстовые поля</h2>
      <div class="inputs" style="display: flex; flex-direction: column; gap: 12px">
        <input-field
            type="text"
            name="user"
            placeholder="Your name"
        />
        <input-field
            icon-name="ic_apps"
            type="tel"
            name="phone"
            placeholder="Your phone"
        />
        <input-field
            :is-input="false"
            name="message"
            placeholder="Your message"
        />
        <input-field
            :is-input="false"
            icon-name="ic_apps"
            name="message"
            placeholder="Additional info"
        />
      </div>
      <h2>Вкладки</h2>
      <toggles
          :toggles="toggles"
          @active-index-change="getActiveTab($event)"
      />
      <div v-if="activeToggle==='toggle-1'">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div v-if="activeToggle==='toggle-2'">
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </div>
      <div v-if="activeToggle==='toggle-3'">
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </div>
      <div v-if="activeToggle==='toggle-4'">
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <h2>Модальное окно</h2>
      <btn
          no-rounded
      >
        <span>Показать модальное окно</span>
      </btn>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/common-components/breadcrumbs";
import Btn from "@/common-components/btn";
import Checkbox from "@/common-components/checkbox";
import CustomSelect from "@/common-components/custom-select";
import InputField from "@/common-components/input-field";
import radio from "@/common-components/radio";
import Toggles from "@/common-components/toggles";
export default {
  name: 'HomeView',
  components: {
    Toggles,
    CustomSelect,
    Checkbox,
    Breadcrumbs,
    Btn,
    InputField,
    radio
  },
  data () {
    return {
      breadcrumbs: [
        { href: '/', text: 'Главная' },
      ],
      options: [
        { name: "Option 1", value: "Option 1", label: "Option 1" },
        { name: "Option 2", value: "Option 2", label: "Option 2"}
      ],
      toggles: [
        { name: "Toggle 1", code: "toggle-1" },
        { name: "Toggle 2", code: "toggle-2" },
        { name: "Toggle 3", code: "toggle-3" },
        { name: "Toggle 4", code: "toggle-4" },
      ],
      activeToggle: 'toggle-1'
    }
  },
  computed: {
  },
  methods: {
    getActiveTab (event) {
      this.activeToggle = event
    }
  }
}
</script>

<style src="./style.scss" lang="scss"/>
