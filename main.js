document.addEventListener('DOMContentLoaded', () => {
    const metodoRadios = document.querySelectorAll('input[name="metodo"]');
    const enderecoField = document.getElementById('enderecoCampo');
    const enderecoInput = document.getElementById('enderecoCliente');

    metodoRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.id === 'metodoTele') {
                enderecoField.style.display = 'block';
                enderecoInput.setAttribute('required', 'required');
            } else {
                enderecoField.style.display = 'none';
                enderecoInput.removeAttribute('required');
                enderecoInput.value = '';
            }
        });
    });

    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            return; 
        }

        const servicoSelecionado = document.querySelector('input[name="servico"]:checked');
        const metodoSelecionado = document.querySelector('input[name="metodo"]:checked');

        if (!servicoSelecionado || !metodoSelecionado) {
            alert('Por favor, selecione um Serviço (Banho/Tosa) e um Método de Agendamento.');
            return;
        }

        const dadosAgendamento = {
            nomeCliente: document.getElementById('nomeCliente').value,
            enderecoCliente: document.getElementById('enderecoCliente').value,
            cpfCliente: document.getElementById('cpfCliente').value,
            emailCliente: document.getElementById('emailcliente').value,
            nomePet: document.getElementById('nomePet').value,
            racaPet: document.getElementById('racaPet').value,
            idadePet: document.getElementById('idadePet').value,
            servico: servicoSelecionado.value,
            metodo: metodoSelecionado.value,
            dataAgendamento: document.getElementById('dataAgendamento').value,
            horaAgendamento: document.getElementById('horaAgendamento').value
        };

        sessionStorage.setItem('agendamentoConfirmado', JSON.stringify(dadosAgendamento));
        window.location.href = 'confirmacao.html';
    });
});