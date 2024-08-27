<template>
    <v-card
        v-for="article in news"
        :key="article.id"
        class="mx-auto mt-4"
        max-width="400"
    >
        <v-card-title>{{ article.webTitle }}</v-card-title>
        <v-card-subtitle>{{ article.webPublicationDate }}</v-card-subtitle>
        <v-card-text>
            <div>{{ article.sectionName }}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn :href="article.webUrl" target="blank">Read More</v-btn>
        </v-card-actions>
    </v-card>
    <v-alert type="error" v-if="error">{{ error }}</v-alert>
</template>

<script setup>
const props = defineProps({
    news: Array,
    error: String
});
</script>
