interface PaginaConviteProps {
  params: {
    alias: string;
  };
}

export default function PaginaConvite({ params }: PaginaConviteProps) {
  return (
    <div>
      <span>{params.alias || "Alias não encontrado"}</span>
    </div>
  );
}

/*
export default function PaginaConvite(props: any) {
  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}
*/
