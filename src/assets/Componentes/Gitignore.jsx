import React from 'react';

export const Gitignore = () => {
    return (
        <div><div>
            <div className="container box-1">
                <h1>¿Cómo usar GitIgnore?</h1>

                <h3>Paso 1: Crear el archivo .gitignore</h3>
                <ol>
                    <li>Abrir el proyecto en tu editor de texto o IDE favorito.</li>
                    <li>Crear un archivo llamado .gitignore en la raíz de tu proyecto (si no existe ya).</li>
                </ol>

                <h3>Paso 2: Configurar .gitignore para excluir imágenes y videos</h3>
                <ol>
                    <li>Abrir el archivo .gitignore.</li>
                    <li>Agregar las siguientes líneas para excluir archivos de imagen y video:</li>
                    <img className="code1" src="images/capture1.png" alt="code1" />
                    <ul>
                        <li>El * es un comodín que indica "cualquier nombre de archivo" con las extensiones especificadas.</li>
                        <li>Si tienes carpetas específicas para imágenes o videos, puedes incluirlas para ignorar todo su contenido.</li>
                    </ul>
                </ol>

                <h3>Paso 3: Guardar y verificar</h3>
                <ol>
                    <li>Guardar el archivo .gitignore.</li>
                    <li>Verificar que los archivos no rastreados se excluyen correctamente:</li>
                </ol>
                <ul>
                    <li>Si ya tenías algunos archivos de imagen o video rastreados por Git, tendrás que eliminar su rastreo
                        manualmente con los siguientes comandos:</li>
                    <img className="code2" src="images/capture2.png" alt="code2" />
                    <li>Luego, confirma que no aparecen al ejecutar <code>git status</code>.</li>
                </ul>

                <h3>Paso 4: Confirmar los cambios</h3>
                <ol>
                    <li>Añadir y hacer commit de tu archivo .gitignore:</li>
                    <img className="code3" src="images/capture3.png" alt="code3" />
                    <li>¡Listo! A partir de ahora, Git ignorará los archivos de imagen y video que hayas especificado en el archivo
                        .gitignore.</li>
                </ol>

                <p className="finisher">
                    Este procedimiento te permitirá mantener tu repositorio limpio de archivos pesados como imágenes y videos, y
                    facilitará la gestión del código fuente.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Gitignore;
