import { reactive } from "vue";

export const language = reactive({
    selected: "en",
});

export function translation (expr) {
    if(language.selected == 'pt-br'){
        switch (expr) {
            case 'Search':
                return 'Pesquisa'
            case "I'm Feeling Lucky":
                return 'Estou com Sorte'
            case "offered in":
                return 'oferecido em'
            case "About ":
                return 'Aproximadamente '
            case " results":
                return ' resultados'
            case "Show More":
                return 'Mostrar Mais'
            case "Your lucky result is: ":
                return 'Sua sorte de hoje é:'
            case "That's because there are no Chuck Norris Jokes, only Chuck Norris Facts.":
                return "Isto é porque não existem piadas de Chuck Norris, apenas fatos de Chuck Norris."
            case " Joke not found":
                return " Piada não encontrada"
            default:
                return 'No translation found'
        }
    }
    return expr
}

