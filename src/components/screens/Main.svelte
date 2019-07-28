<script>
  import Link from '../common/Link.svelte'
  import screens from '../../constants/screens.js'
</script>

<article>
  <h2>Выбери действие</h2>
  <button>
    <Link to={ screens.REGISTRATION }>
        Новое тестирование
    </Link>
  </button>
  <button>
    <Link to={ screens.ARCHIVE }>
      Просмотр результатов
    </Link>
  </button>
</article>