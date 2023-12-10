export let requerido = (v) => {
    return !!v || 'Este campo es requerido'
}
export let minimo = (v, m) => {
    return v.length >= m || `Este campo debe tener al menos ${m} caracteres`
}
export let maximo = (v, m) => {
    return v.length <= m || `Este campo debe tener menos de ${m} caracteres`
}
export let email = (v) => {
    return /.+@.+/.test(v) || 'El correo debe ser válido'
}
export let edad = (v) => {
    return v >= 18 || 'Debe ser mayor de edad'
}
export let telefono = (v) => {
    return v.length >= 10 || 'El teléfono debe tener al menos 10 caracteres'
}
export let url = (v) => {
    return /(http|https):\/\/.+/.test(v) || 'La URL debe ser válida'
}
export let fecha = (v) => {
    return /.+/.test(v) || 'La fecha debe ser válida'
}
export let numero = (v) => {
    return !isNaN(v) || 'Debe ser un número'
}

export let numeroNegativo = (v) => {
    return (!isNaN(v) && v >= 0) || 'Debe ser un número positivo';
}

export let caracteresEspeciales = (v) => {
    // Verifica si el valor contiene solo letras, números, espacios o la letra 'ñ'
    const regex = /^[a-zA-Z0-9ñÑ ]+$/;
    return regex.test(v) || 'No se permiten caracteres especiales, solo letras, números, espacios o la letra "ñ"';
};

export let caracteresNormales = (v) => {
    // Verifica si el valor contiene solo letras (incluyendo 'ñ' y acentos), y espacios
    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+$/;
    return regex.test(v) || 'No se permiten caracteres especiales, solo letras, espacios, la letra "ñ" y acentos';
};



export let caracteresEspecificos = (v) => {
    // Verifica si el valor contiene solo el carácter '@', '.', o cualquier otro carácter
    const regex = /^[@.a-zA-Z0-9]+$/;
    return regex.test(v) || 'Solo se permiten los caracteres "@" y "."';
};

export let soloNumeros = (v) => {
    // Verifica si el valor contiene solo números
    const regex = /^[0-9]+$/;
    return regex.test(v) || 'Solo se permiten números';
};

export let soloNumerosConDecimales = (v) => {
    // Verifica si el valor contiene solo números y al menos un punto
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    return regex.test(v) || 'Ingrese solo números válidos';
};


export let soloGuionMedio = (v) => {
    // Verifica si el valor contiene solo guiones
    const regex = /^[a-zA-Z\-]+$/;

    return regex.test(v) || 'Solo se permiten letras y guiones';
};
