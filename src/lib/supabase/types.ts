export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Domain: {
        Row: {
          domain: string
          id: string
          workspaceId: string
        }
        Insert: {
          domain: string
          id: string
          workspaceId: string
        }
        Update: {
          domain?: string
          id?: string
          workspaceId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Domain_workspaceId_fkey"
            columns: ["workspaceId"]
            referencedRelation: "Workspace"
            referencedColumns: ["id"]
          }
        ]
      }
      Link: {
        Row: {
          androidUrl: string
          createdAt: string
          currentClicks: number
          domainId: string | null
          errorRedirectUrl: string
          expirationDate: string | null
          id: string
          iosUrl: string
          linkTreePageId: string | null
          maxClicks: number
          password: string | null
          shortUrl: string
          workspaceId: string
        }
        Insert: {
          androidUrl: string
          createdAt?: string
          currentClicks?: number
          domainId?: string | null
          errorRedirectUrl: string
          expirationDate?: string | null
          id: string
          iosUrl: string
          linkTreePageId?: string | null
          maxClicks: number
          password?: string | null
          shortUrl: string
          workspaceId: string
        }
        Update: {
          androidUrl?: string
          createdAt?: string
          currentClicks?: number
          domainId?: string | null
          errorRedirectUrl?: string
          expirationDate?: string | null
          id?: string
          iosUrl?: string
          linkTreePageId?: string | null
          maxClicks?: number
          password?: string | null
          shortUrl?: string
          workspaceId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Link_domainId_fkey"
            columns: ["domainId"]
            referencedRelation: "Domain"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Link_linkTreePageId_fkey"
            columns: ["linkTreePageId"]
            referencedRelation: "LinkTreePage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Link_workspaceId_fkey"
            columns: ["workspaceId"]
            referencedRelation: "Workspace"
            referencedColumns: ["id"]
          }
        ]
      }
      LinkTag: {
        Row: {
          linkId: string
          tagId: string
        }
        Insert: {
          linkId: string
          tagId: string
        }
        Update: {
          linkId?: string
          tagId?: string
        }
        Relationships: [
          {
            foreignKeyName: "LinkTag_linkId_fkey"
            columns: ["linkId"]
            referencedRelation: "Link"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "LinkTag_tagId_fkey"
            columns: ["tagId"]
            referencedRelation: "Tag"
            referencedColumns: ["id"]
          }
        ]
      }
      LinkTreePage: {
        Row: {
          description: string
          id: string
          theme: string
          title: string
          workspaceId: string
        }
        Insert: {
          description: string
          id: string
          theme: string
          title: string
          workspaceId: string
        }
        Update: {
          description?: string
          id?: string
          theme?: string
          title?: string
          workspaceId?: string
        }
        Relationships: [
          {
            foreignKeyName: "LinkTreePage_workspaceId_fkey"
            columns: ["workspaceId"]
            referencedRelation: "Workspace"
            referencedColumns: ["id"]
          }
        ]
      }
      Tag: {
        Row: {
          id: string
          label: string
          workspaceId: string
        }
        Insert: {
          id: string
          label: string
          workspaceId: string
        }
        Update: {
          id?: string
          label?: string
          workspaceId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Tag_workspaceId_fkey"
            columns: ["workspaceId"]
            referencedRelation: "Workspace"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          email: string
          id: string
          password: string
          role: Database["public"]["Enums"]["Role"]
        }
        Insert: {
          createdAt?: string
          email: string
          id: string
          password: string
          role?: Database["public"]["Enums"]["Role"]
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          password?: string
          role?: Database["public"]["Enums"]["Role"]
        }
        Relationships: []
      }
      Workspace: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          name: string
          ownerId: string
          subscriptionType: Database["public"]["Enums"]["SubscriptionType"]
          userId: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id: string
          name: string
          ownerId: string
          subscriptionType?: Database["public"]["Enums"]["SubscriptionType"]
          userId: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          name?: string
          ownerId?: string
          subscriptionType?: Database["public"]["Enums"]["SubscriptionType"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Workspace_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      WorkspaceUser: {
        Row: {
          invitedAt: string
          role: Database["public"]["Enums"]["WorkspaceUserRole"]
          userId: string
          workspaceId: string
        }
        Insert: {
          invitedAt?: string
          role?: Database["public"]["Enums"]["WorkspaceUserRole"]
          userId: string
          workspaceId: string
        }
        Update: {
          invitedAt?: string
          role?: Database["public"]["Enums"]["WorkspaceUserRole"]
          userId?: string
          workspaceId?: string
        }
        Relationships: [
          {
            foreignKeyName: "WorkspaceUser_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "WorkspaceUser_workspaceId_fkey"
            columns: ["workspaceId"]
            referencedRelation: "Workspace"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Role: "ADMIN" | "TESTER" | "USER"
      SubscriptionType: "FREE" | "CREATOR" | "BULK"
      WorkspaceUserRole: "OWNER" | "ADMIN" | "MEMBER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}