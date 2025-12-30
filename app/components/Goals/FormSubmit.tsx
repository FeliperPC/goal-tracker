"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldDescription, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { TaskFormData } from "@/types/types";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";

export default function FormSubmit() {
  const [tasks, setTasks] = useState<TaskFormData[]>([
    { name: "", status: "TODO" },
  ]);

  function addTask(e: any) {
    e.preventDefault();
    setTasks([...tasks, { name: "", status: "TODO" }]);
  }

  function removeTask(e: any, index: number) {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleTaskInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { value } = e.target;
    const newTasks = [...tasks];
    newTasks[index].name = value;
    setTasks(newTasks);
  }

  function handleTaskStatusChange(index: number) {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "TODO" ? "DONE" : "TODO";
    setTasks(newTasks);
  }
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="goal-title">Title</Label>
          <Input
            id="goal-title"
            type="text"
            placeholder="Graduate from college"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Complete my college degree and meet all graduation requirements."
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="status">Status</Label>
          <FieldDescription>
            Marking a goal as completed will automatically mark all related
            tasks as completed.
          </FieldDescription>
          <RadioGroup defaultValue="todo" className="mt-2">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="todo" id="goal-todo" />
              <Label htmlFor="goal-todo">To Do</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="done" id="goal-done" />
              <Label htmlFor="goal-done">Done</Label>
            </div>
          </RadioGroup>
        </div>
        <FieldSeparator />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Tasks</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {tasks.map((task, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <Checkbox
                    id="task"
                    className="size-6 border border-primary/50"
                    checked={task.status == "DONE"}
                    onClick={() => handleTaskStatusChange(index)}
                  />
                  <Input
                    id="task-title"
                    type="text"
                    placeholder="Make my registration"
                    value={task.name}
                    onChange={(e) => handleTaskInputChange(e, index)}
                    required
                  />
                  <Button
                    variant="outline"
                    disabled={tasks.length == 1}
                    onClick={(e) => removeTask(e, index)}
                  >
                    <Trash />
                  </Button>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-4">
              <Button variant="outline" className="w-full" onClick={addTask}>
                <Plus />
                New task
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
