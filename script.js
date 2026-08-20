function entrar() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {

        document.getElementById("erro").textContent =
            "Preencha o Gmail e a senha.";

        return;
    }

    // Esconde a tela de login
    document.getElementById("login").style.display = "none";

    // Mostra a tela de estudos
    document.getElementById("estudos").style.display = "block";
}


function mostrarConteudo(cargo) {

    const conteudo = document.getElementById("conteudo");

    if (cargo === "vereador") {

        conteudo.innerHTML = `
            <h2>O que é um vereador?</h2>

            <p>
                Um vereador é um agente político eleito pela população para integrar o Poder Legislativo do município (a cidade). O trabalho dele acontece na Câmara Municipal, onde o principal objetivo é representar os interesses dos moradores, criar leis locais e fiscalizar a Prefeitura
            </p>

            <h3>O que ele faz?</h3>

            <p>
                Legislar: Cria, altera ou cancela leis municipais (como regras de trânsito, nomes de ruas, impostos locais e planos de saúde ou educação).Fiscalizar: Vigia o trabalho do prefeito e vê se o dinheiro público está sendo bem usado na cidade.Aprovar o orçamento: Discute e vota o orçamento anual da prefeitura, decidindo onde aplicar os recursos financeiros do município.Ouvir a população: Recebe pedidos, reclamações e sugestões dos cidadãos para cobrar melhorias da Prefeitura.
            </p>

            <h4>Onde ele trabalha?</h4>

            <p>
                Plenário: Local onde ocorrem as sessões oficiais, os debates e a votação de projetos de leis e de leis do orçamento.Gabinete: Espaço próprio dentro da Câmara onde o vereador organiza o seu mandato e faz o atendimento direto aos moradores da cidade.Comissões e Ruas: Ele também atua em comissões internas da Câmara e circula pelos bairros do município para fiscalizar obras públicas e ouvir as necessidades da população.
            </p>

            <h5>O que ele NAO faz</h5>

            <p>
              Não faz obras: O vereador não tem o poder de mandar construir ruas, escolas ou postos de saúde, pois quem executa essas obras é o Poder Executivo (o prefeito).Não contrata funcionários: Não cabe ao vereador contratar ou demitir servidores para a prefeitura
            </p>
        `;
    }


    if (cargo === "estadual") {

        conteudo.innerHTML = `
            <h2>O que é um deputado estadual?</h2>

            <p>
                Um deputado estadual é um político eleito pelo povo para trabalhar na Assembleia Legislativa. O trabalho dele é criar e mudar leis, aprovar o orçamento do estado e fiscalizar as ações do governador. As regras que ele faz valem apenas dentro daquele estado
            </p>

            <h3>Onde ele trabalha?</h3>

            <p>
                Locais de Atuação Plenário: Onde ocorrem as sessões de debates e votações de leis e projetos do estado.Gabinete: O escritório próprio do deputado dentro da Assembleia, onde sua equipe atende cidadãos, prefeitos e lideranças políticas.Comissões Técnicas: Salas de reuniões onde propostas de leis são analisadas antes de irem ao plenário.Bases eleitorais: Ruas, bairros e municípios do interior do estado, locais que o deputado visita com frequência para ouvir as necessidades da população.
            </p>

            <h3>O que ele faz?</h3>

            <p>
               Criar leis: Propõe, discute e vota projetos de lei sobre temas como saúde, educação, segurança pública e impostos estaduais.Fiscalizar o governo: Acompanha se o governador está gastando o dinheiro público de forma correta em hospitais, delegacias e estradas estaduais.Aprovar o orçamento: Decide como o dinheiro arrecadado pelo estado será distribuído nos planos de investimento e nas contas públicas.
            </p>

            <h4>O que ele NAO faz</h4>

            <p>
              Não administra cidades: Ele não cuida de ruas, buracos, coleta de lixo, postes de luz ou postos de saúde municipais. Isso é papel do prefeito e dos vereadores.Não executa obras: Ele não constrói escolas ou hospitais diretamente; ele pode cobrar, sugerir melhorias ou destinar verbas, mas quem faz a obra é o governo do estado.
            </p>
        `;
    }


    if (cargo === "federal") {

        conteudo.innerHTML = `
            <h2>O que é um deputado federal?</h2>

            <p>
                Deputado federal é o representante eleito para a Câmara dos Deputados, uma das duas casas do poder legislativo federal no Brasil. De acordo com a Constituição Federal do Brasil de 1988, é o representante nacional popular, eleito por voto direto.
            </p>

            <h3>Onde ele trabalha?</h3>

            <p>
               Brasília: No Congresso Nacional, onde participa de sessões no plenário e de reuniões nas comissões para criar e votar leis.Nos Estados: Nos períodos sem votações presenciais ou em agendas políticas, ele atende eleitores e fiscaliza obras em sua região de origem.
            </p>

            <h3>O que ele faz?</h3>

            <p>
               Cria e vota leis: Propõe, discute e aprova novas regras, códigos e mudanças na Constituição que afetam o país inteiro.Fiscaliza o governo: Vigia os atos do presidente da República e de seus ministros, podendo convocar autoridades para dar explicações.Aprova o orçamento: Decide como o dinheiro dos impostos federais será dividido e aplicado pelo governo.Usa emendas parlamentares: Indica verbas do orçamento para ajudar em projetos ou obras de municípios e estados, mas ele não executa a obra diretamente
            </p>

             <h4>O que ele NAO faz</h4>

            <p>
             Não governa: Não é prefeito, governador ou presidente. Ele não tem poder para asfaltar ruas, construir postos de saúde ou gerenciar escolas.Não executa obras: O trabalho dele é político e legislativo; quem contrata empresas, planeja e executa serviços públicos é o Poder Executivo.Não prende nem julga: O Legislativo não faz o papel da Justiça (Poder Judiciário), que investiga crimes e aplica penas.Não cria leis locais: Não define regras exclusivas de um município (papel de vereador) nem leis restritas a um único estado (papel de deputado estadual).
            </p>
        `;
    }
}