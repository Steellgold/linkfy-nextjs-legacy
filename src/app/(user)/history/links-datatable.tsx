"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/lib/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BarChart2, BrainCircuitIcon, LayoutTemplate, LinkIcon, Plus, QrCode, Settings, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/lib/components/ui/context-menu";
import { Badge } from "@/lib/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/components/ui/dialog";
import { Label } from "@/lib/components/ui/label";
import { Separator } from "@/lib/components/ui/separator";
import { useMediaQuery } from "usehooks-ts";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

export const LinksTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const media = useMediaQuery("(max-width: 640px)");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between py-4 space-x-2 px-3">
        <Input
          placeholder="Filter by URL"
          value={(table.getColumn("url")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("url")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <div className="mr-3 flex gap-2 ">
          {table.getFilteredSelectedRowModel().rows.length == 0 ? (
            <>
              {media ? (
                <Link href={"/"} className={buttonVariants({ variant: "default" })}><Plus className="h-4 w-4" /></Link>
              ) : (
                <Link href={"/"} className={buttonVariants({ variant: "default" })}>Create link</Link>
              )}
            </>
          ) : null}
          
          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <Dialog>
              <DialogTrigger>
                {media ? (
                  <Button variant="default" size={"icon"} disabled={table.getFilteredSelectedRowModel().rows.length <= 1}>
                    <LayoutTemplate className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="default" disabled={table.getFilteredSelectedRowModel().rows.length <= 1}>
                    Create a list
                  </Button>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Let&apos;s create a list</DialogTitle>
                  <DialogDescription>
                    A list is a collection of links that you can share with your friends, family, or colleagues. You can create a list for a specific project, or for a specific group of people.
                  </DialogDescription>
                  <div className="flex flex-col">
                    <div className="space-y-1">
                      <Label htmlFor="listName">List name</Label>
                      <Input id="listName" placeholder="My social media links" />
                    </div>

                    <div className="mt-3 border rounded-md p-3">
                      <Label>Without <span className="text-amber-300">Plus</span> you can choose only one of the following options, but you can change it later in the settings if you switch to <span className="text-amber-300">Plus</span>.
                      </Label>

                      <Separator className="mt-2 mb-3" />

                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="logo">Upload a logo</Label>
                          <Input id="logo" type="file" />
                        </div>

                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="bg">Background image</Label>
                          <Input id="bg" accept="image/png,image/jpg,image/jpeg" type="file" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mt-3">
                      <Label htmlFor="color">Choose the background color</Label>
                      <Label className="text-muted mt-0.5 mb-1">This will be used if no background image is uploaded (default).</Label>
                      <Input id="color" type="color" />
                    </div>
                  </div>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    type="submit"
                    onSubmit={() => console.log("Creating list")}
                  >Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : null}

          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                {media ? (
                  <Button variant="destructive" size="icon" disabled={!table.getFilteredSelectedRowModel().rows.length}>
                    <Trash className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="destructive" disabled={!table.getFilteredSelectedRowModel().rows.length}>
                    Delete
                  </Button>
                )}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your links, and remove them from your history. All statistics will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className={buttonVariants({ variant: "destructive" })}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : null}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <ContextMenu key={row.id}>
                  <ContextMenuTrigger asChild>
                    <TableRow data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <Link href={row.getValue("url")}>
                      <ContextMenuItem className="cursor-pointer">
                        Go to
                        <ContextMenuShortcut>
                          <LinkIcon className="h-4 w-4 ml-2" />
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                    </Link>
                    <Link href={row.getValue("slug") + "/stats"}>
                      <ContextMenuItem className="cursor-pointer">
                        Statistics
                        <ContextMenuShortcut>
                          <BarChart2 className="h-4 w-4 ml-2" />
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                    </Link>
                    <Link href={row.getValue("slug") + "/settings"}>
                      <ContextMenuItem className="cursor-pointer">
                        Settings
                        <ContextMenuShortcut>
                          <Settings className="h-4 w-4 ml-2" />
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                    </Link>
                    <ContextMenuItem>
                      Generate QR Code
                      <ContextMenuShortcut>
                        <QrCode className="h-4 w-4 ml-2" />
                      </ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem className="group">
                      Chat with AI&nbsp;<Badge variant="premium">Plus</Badge>
                      <ContextMenuShortcut>
                        <BrainCircuitIcon className="h-4 w-4 ml-2" />
                      </ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="group transition-colors">
                      <span className="group-hover:text-red-500">Delete</span>
                      <ContextMenuShortcut>
                        <Trash className="group-hover:text-red-500 h-4 w-4 ml-2" />
                      </ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No links found, create one first in the home page.&nbsp;
                  <Link href={"/"} className="hover:underline">
                    click here to create one
                  </Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4 mr-3">
        <div>
          <div className="flex-1 text-sm text-muted-foreground ml-3">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => void table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => void table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
