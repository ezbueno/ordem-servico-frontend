import { Tecnico } from "./../../../../models/tecnico";
import { TecnicoService } from "./../../../../services/tecnico.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-tecnico-create",
  templateUrl: "./tecnico-create.component.html",
  styleUrls: ["./tecnico-create.component.css"],
})
export class TecnicoCreateComponent implements OnInit {
  tecnico: Tecnico = {
    id: "",
    nome: "Ezandro",
    cpf: "445.284.020-50",
    telefone: "(11) 99999-0000",
  };

  constructor(private router: Router, private service: TecnicoService) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(["tecnicos"]);
  }

  create(): void {
    this.service.create(this.tecnico).subscribe(
      () => {
        this.router.navigate(["tecnicos"]);
        this.service.message("Técnico criado com sucesso!");
      },
      (err) => {
        if (err.error.error.match("já cadastrado")) {
          this.service.message(err.error.error);
        }
      }
    );
  }
}
