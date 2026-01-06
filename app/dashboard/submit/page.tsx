"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ArrowLeftCircle, Sparkles } from "lucide-react";
import { addGoalAction } from "@/lib/goal/goal-actions";
import { useActionState, useEffect } from "react";
import { FormState } from "@/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { TaskFormData } from "@/types/types";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";

export default function SubmitPage() {
  const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
  };
  const [state, formAction, isPending] = useActionState(
    addGoalAction,
    initialState
  );

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.success) {
      if (state.message) {
        setShowMessage(true);
      }
      setTasks([{ name: "", status: "TODO" }]);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [state]);

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
  const { errors, message, success } = state;

  return (
    <div className="px-4">
      {success && message && showMessage && (
        <div
          className={cn(
            "p-4 mb-2 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Link
            href="/dashboard"
            className="text-primary hover:underline text-sm flex gap-1 mb-4"
          >
            <ArrowLeft className="size-5" />
            Back to home
          </Link>
          <CardTitle>Create Goal</CardTitle>
          <CardDescription>
            Complete the information below to set a new goal, all fields are
            required
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent>
            <div>
              <div className="flex flex-col gap-6">
                <Field data-invalid={!!errors?.name}>
                  <Label htmlFor="goal-name">Title</Label>
                  <Input
                    name="name"
                    id="goal-name"
                    type="text"
                    placeholder="Graduate from college"
                    required
                    aria-invalid={!!errors?.name}
                  />
                  <FieldError>{errors?.name}</FieldError>
                </Field>
                <Field data-invalid={!!errors?.description}>
                  <Label htmlFor="goal-description">Description</Label>
                  <Textarea
                    name="description"
                    id="goal-description"
                    placeholder="Complete my college degree and meet all graduation requirements."
                    required
                    aria-invalid={!!errors?.description}
                  />
                  <FieldError>{errors?.description}</FieldError>
                </Field>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <FieldDescription>
                    Marking a goal as completed will automatically mark all
                    related tasks as completed.
                  </FieldDescription>
                  <RadioGroup
                    defaultValue="todo"
                    className="mt-2"
                    name="goalStatus"
                  >
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
                      <FieldError>
                        {errors?.error && "Tasks must have a valid name."}
                      </FieldError>
                      {tasks.map((task, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="task"
                              className="size-6 border border-primary/50"
                              checked={task.status == "DONE"}
                              onClick={() => handleTaskStatusChange(index)}
                              value={task.status}
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
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex justify-center mt-4">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={addTask}
                      >
                        <Plus />
                        New task
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {isPending ? (
                <>
                  <LoadingSpinner /> Creating ...
                </>
              ) : (
                <>
                  <Sparkles />
                  Create goal
                </>
              )}
            </Button>
          </CardFooter>
          <input type="hidden" name="tasks" value={JSON.stringify(tasks)} />
        </form>
      </Card>
    </div>
  );
}
