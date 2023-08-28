"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { Smokum } from "next/font/google";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  const [activePage, setPage] = useState(1);

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating value={value} onChange={setValue} size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly size="sm" />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />

      <Group position="center">
        <Title order={4} align="center">
          Mark Zuck
        </Title>
        <Rating value={4} fractions={2} readOnly size="sm" />
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={20}
        position="center"
        mt="md"
        color="orange"
      />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Yotsawat Sukinee 650612097
      </Text>
    </Container>
  );
}
