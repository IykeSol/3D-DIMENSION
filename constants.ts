
import type { OrganData, OrganType, OrganList } from './types';

// IMPORTANT: The GLB model URLs provided below are for demonstration purposes.
// The 'heart' model is a real, working URL. The others are placeholders.
// You MUST replace the placeholder URLs with links to your own hosted 3D models.
// For example, upload your .glb files to a service like Vercel Blob, AWS S3, or Google Cloud Storage.

const MODEL_BASE_URL = "https://your-model-hosting-service.com/models/";

export const ORGAN_DATA: Record<OrganType, OrganData> = {
    heart: {
        id: 'heart',
        name: 'Human Heart',
        file: 'https://storage.googleapis.com/immersive-web-assets/models/Heart.glb', // WORKING EXAMPLE
        title: 'Human Heart',
        description: 'The heart is a muscular organ that pumps blood throughout the body. It consists of four chambers and beats approximately 100,000 times per day.',
        stats: [
            { value: '300g', label: 'Weight' },
            { value: '100K', label: 'Beats/Day' },
            { value: '5L', label: 'Blood/Min' },
            { value: '4', label: 'Chambers' }
        ]
    },
    brain: {
        id: 'brain',
        name: 'Human Brain',
        file: `${MODEL_BASE_URL}Brain_Model_3DFile_123456.glb`, // <-- REPLACE THIS
        title: 'Human Brain',
        description: 'High-resolution MRI-based 3D reconstruction of the human brain showing detailed cortical structures and regions.',
        stats: [
            { value: '1.4kg', label: 'Weight' },
            { value: '86B', label: 'Neurons' },
            { value: '20%', label: 'Energy Use' },
            { value: '73%', label: 'Water' }
        ]
    },
    lungs: {
        id: 'lungs',
        name: 'Human Lungs',
        file: `${MODEL_BASE_URL}lungs.glb`, // <-- REPLACE THIS
        title: 'Human Lungs',
        description: 'Detailed anatomical model of human lungs showing bronchial tree and lobar structures with realistic tissue representation.',
        stats: [
            { value: '1.3kg', label: 'Weight' },
            { value: '300M', label: 'Alveoli' },
            { value: '6L', label: 'Capacity' },
            { value: '12-20', label: 'Breaths/Min' }
        ]
    },
    liver: {
        id: 'liver',
        name: 'Human Liver',
        file: `${MODEL_BASE_URL}VH_M_Liver.glb`, // <-- REPLACE THIS
        title: 'Human Liver',
        description: 'The liver is a vital organ that processes nutrients, filters blood, and produces bile. It has remarkable regenerative capabilities.',
        stats: [
            { value: '1.5kg', label: 'Weight' },
            { value: '500+', label: 'Functions' },
            { value: '1.5L', label: 'Blood/Min' },
            { value: '4', label: 'Lobes' }
        ]
    },
    lymph: {
        id: 'lymph',
        name: 'Lymph Node',
        file: `${MODEL_BASE_URL}NIH_M_Lymph_Node.glb`, // <-- REPLACE THIS
        title: 'Lymph Node',
        description: 'Lymph nodes are small bean-shaped structures that filter lymph fluid and house immune cells to fight infection and disease.',
        stats: [
            { value: '600+', label: 'In Body' },
            { value: '1-2cm', label: 'Size' },
            { value: 'B-Cells', label: 'Immunity' },
            { value: 'T-Cells', label: 'Immunity' }
        ]
    }
};

export const ORGANS: OrganList[] = Object.values(ORGAN_DATA).map(({ id, name }) => ({ id, name }));
