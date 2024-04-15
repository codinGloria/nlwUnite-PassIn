import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import dayjs from 'dayjs';
import relativeTime  from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
import { IconButton } from "./icon-button";
import { Table } from "../components/table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useEffect, useState } from "react";

dayjs.extend(relativeTime)
dayjs.locale("pt-br")

interface Attendee {
  id: string
  nome: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([])

  const totalPages = Math.ceil(attendees.length / 10)

  useEffect(() => {
    fetch(`http://localhost:8080/events/attendees/681e8f09-0314-47af-ac7c-1873723ea708?pageIndex=${page - 1}`)
      .then(response => response.json())
      .then(data => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page])

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)
  }

  function goToNextPage(){
    setPage(page + 1)
  }

  function goToPreviousPage(){
    setPage(page - 1)
  }

  function goToLastPage(){
    setPage(totalPages)
  }

  function goToFirstPage(){
    setPage(1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input onChange={onSearchInputChange} className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..."/>
        </div>

        {search}
      </div>

      <Table>
        <thead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400"/>
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de Inscrição</TableHeader>
            <TableHeader>Data do Check-In</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 hover:bg-orange-200"
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>
                  {attendee.checkedInAt === null 
                  ?<span className="text-zinc-400">Não fez check-in</span>
                  : dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} itens
            </TableCell>
            <TableCell  className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Página {page} de {totalPages}</span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
