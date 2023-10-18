'use client'

import classNames from "classnames";
import { Card } from "react-daisyui";

export default function AboutPage() {
  return (
    <div>
      <h3 className="text-2xl text-zinc-950 dark:text-zinc-200 font-bold p-3">
        Sobre o Geração 666
      </h3>

      <Card
        side
        bordered={false}
        className={classNames(
          'rounded-none',
          'text-zinc-200',
          'p-3',
        )}
      >
        <Card.Body className="text-zinc-950 dark:text-zinc-200 p-0">
          <p>
            Desde 12 de agosto de 2009 na ativa, o Geração 666 é um blog com foco em<br />
            compartilhamento e disseminação de conteúdo musical. Só coisa fina!<br /><br />

            Aqui não pisa banda ruim e banda de pilantra.<br />
            Viva o livre compartilhamento de arquivos na Internet.
          </p>
        </Card.Body>
      </Card>
    </div>
  )
}