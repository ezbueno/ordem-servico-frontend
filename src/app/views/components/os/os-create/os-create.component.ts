import { OsService } from "./../../../../services/os.service";
import { OrdemServico } from "./../../../../models/os";
import { Cliente } from "./../../../../models/cliente";
import { ClienteService } from "./../../../../services/cliente.service";
import { Tecnico } from "./../../../../models/tecnico";
import { Component, OnInit } from "@angular/core";
import { TecnicoService } from "src/app/services/tecnico.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-os-create",
  templateUrl: "./os-create.component.html",
  styleUrls: ["./os-create.component.css"],
})
export class OsCreateComponent implements OnInit {
  ordemServico: OrdemServico = {
    tecnicoId: "",
    clienteId: "",
    prioridade: "",
    observacoes: "",
    status: "",
  };

  tecnicos: Tecnico[] = [];
  clientes: Cliente[] = [];

  constructor(
    private tecnico: TecnicoService,
    private cliente: ClienteService,
    private service: OsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  create(): void {
    this.service.create(this.ordemServico).subscribe(() => {
      this.service.message("Ordem de Serviço criada com sucesso!");
      this.router.navigate(["os"]);
    });
  }

  cancel(): void {
    this.router.navigate(["os"]);
  }

  listarTecnicos(): void {
    this.tecnico.findAll().subscribe((response) => {
      this.tecnicos = response;
    });
  }

  listarClientes(): void {
    this.cliente.findAll().subscribe((response) => {
      this.clientes = response;
    });
  }
}
