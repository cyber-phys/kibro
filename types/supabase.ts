export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          created_at: string | null
          description: string | null
          end_time: string | null
          id: number
          location: string | null
          number_people_max: number | null
          start_time: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_time?: string | null
          id?: number
          location?: string | null
          number_people_max?: number | null
          start_time?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_time?: string | null
          id?: number
          location?: string | null
          number_people_max?: number | null
          start_time?: string | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
